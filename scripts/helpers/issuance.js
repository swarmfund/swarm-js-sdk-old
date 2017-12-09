const StellarSdk = require('../../lib/index');
var reviewableRequestHelper = require('./review_request')

function createPreIssuanceRequest(testHelper, assetOwnerKP, preIssuanceKP, assetCode, amount) {
    var preIssuanceRequest = StellarSdk.PreIssuanceRequest.build({
        amount: amount,
        reference: StellarSdk.Keypair.random().accountId(),
        asset: assetCode,
        keyPair: preIssuanceKP,
    });
    let op = StellarSdk.PreIssuanceRequestOpBuilder.createPreIssuanceRequestOp({ request: preIssuanceRequest });
    return testHelper.server.submitOperation(op, assetOwnerKP.accountId(), assetOwnerKP);
}

function performPreIssuance(testHelper, assetOwnerKP, preIssuanceKP, assetCode, amount) {
    return createPreIssuanceRequest(testHelper, assetOwnerKP, preIssuanceKP, assetCode, amount)
        .then(response => {
            var result = StellarSdk.xdr.TransactionResult.fromXDR(new Buffer(response.result_xdr, "base64"));
            var id = result.result().results()[0].tr().createPreIssuanceRequestResult().success().requestId().toString();
            return reviewableRequestHelper.reviewRequest(testHelper, id, testHelper.master, StellarSdk.xdr.ReviewRequestOpAction.approve().value, "");
        })
        .then(res => {
            console.log('PerformedPreIssuance: ', amount, assetCode)
            return res
        }).catch(err => {
            console.log(err.response.data.extras)
        });
}

function issue(testHelper, requestor, receiverBalanceID, asset, amount) {
    const opts = {
        asset: asset,
        amount: amount,
        receiver: receiverBalanceID,
        reference: StellarSdk.Keypair.random().accountId(),
    };

    const op = StellarSdk.CreateIssuanceRequestBuilder.createIssuanceRequest(opts);
    return testHelper.server.submitOperation(op, requestor.accountId(), requestor)
      .then(res => {
        console.log('Issued: ', amount, asset, 'to', receiverBalanceID)
        return res
      });
}

module.exports = {
    createPreIssuanceRequest,
    performPreIssuance,
    issue
}