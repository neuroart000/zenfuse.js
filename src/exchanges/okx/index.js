/**
 * @file index.js
 * @description OKX exchange wallet exports. Use zenfuse.OKX.spot for spot trading.
 */
const OkxSpot = require('./wallets/spot');

// prettier-ignore
/**
 * OKX wallet types. spot: OkxSpot class for spot API.
 * @enum {typeof OkxSpot}
 */
const OkxWallets = {
    'spot': OkxSpot,
};

module.exports = OkxWallets;
