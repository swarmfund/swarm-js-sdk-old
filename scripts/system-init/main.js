const helpers = require('./../helpers');
const operations = require('./operations');


Promise.all(operations.createAssets())
    .then(_ => {
        console.log('Assets created')
        Promise.all(operations.preEmitCoins())
    }).then(_ => {
        console.log('Coins pre-emitted')
        return Promise.all(operations.createAccount())
    }).then(_ => {
        console.log('Accounts created')
        return Promise.all(operations.issueTokens())
    }).then(_ => {
        console.log('Tokens Issued')
    }).catch(helpers.errorHandler);