# @tokend/js-sdk



js-stellar-sdk is a client-side Stellar Javascript library for communicating with a Stellar Horizon server. It is used for building Stellar apps either on Node.js or in the browser.

It provides:
- a networking layer API for Horizon endpoints.
- facilities for building and signing transactions, for communicating with a Stellar Horizon instance, and for submitting transactions or querying network history.

> **Warning!** Node version of `stellar-base` (`stellar-sdk` dependency) package is using [`ed25519`](https://www.npmjs.com/package/ed25519) package, a native implementation of [Ed25519](https://ed25519.cr.yp.to/) in Node.js, as an [optional dependency](https://docs.npmjs.com/files/package.json#optionaldependencies). This means that if for any reason installation of this package fails, `stellar-base` (and `stellar-sdk`) will fallback to the much slower implementation contained in [`tweetnacl`](https://www.npmjs.com/package/tweetnacl).
>
> If you are using `stellar-sdk`/`stellar-base` in a browser you can ignore this. However, for production backend deployments you should definitely be using `ed25519`. If `ed25519` is successfully installed and working `StellarSdk.FastSigning` variable will be equal `true`. Otherwise it will be `false`.


## Quick start

Using npm to include js-stellar-sdk in your own project:
```shell
npm install --save stellar-sdk
```

For browsers, [use Bower to install js-stellar-sdk](#to-use-in-the-browser). It exports a
variable `StellarSdk`. The example below assumes you have `stellar-sdk.js`
relative to your html file.

```html
<script src="stellar-sdk.js"></script>
<script>console.log(StellarSdk);</script>

```

## Install

### To use as a module in a Node.js project
1. Install it using npm:
  ```shell
  npm install --save stellar-sdk
  ```

2. require/import it in your JavaScript:
  ```js
  var StellarSdk = require('stellar-sdk');
  ```

#### Help! I'm having trouble installing the SDK on Windows

Unfortunately, the Stellar platform development team mostly works on OS X and Linux, and so sometimes bugs creep through that are specific to windows.  When installing stellar-sdk on windows, you might see an error that looks similar to the following:

```shell
error MSB8020: The build tools for v120 (Platform Toolset = 'v120 ') cannot be found. To build using the v120 build tools, please install v120 build tools.  Alternatively, you may upgrade to the current Visual Studio tools by selecting the Project menu or right-click the solution, and then selecting "Retarget solution"
```

To resolve this issue, you should upgrade your version of nodejs, node-gyp and then re-attempt to install the offending package using `npm install -g --msvs_version=2015 ed25519`.  Afterwards, retry installing stellar-sdk as normal.

In the event the above does not work, please join us on our community slack to get help resolving your issue.


## License
js-stellar-sdk is licensed under an Apache-2.0 license.