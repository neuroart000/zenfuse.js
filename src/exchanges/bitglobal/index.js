/**
 * @file index.js
 * @description Bitglobal exchange wallet exports. Use zenfuse.Bitglobal.spot for spot trading.
 */
const BitglobalSpot = require('./wallets/spot');

// prettier-ignore
/**
 * Bitglobal wallet types. spot: BitglobalSpot class for spot API.
 * @enum {typeof BitglobalSpot}
 */
const BitglobalWallets = {
    'spot': BitglobalSpot,
};

module.exports = BitglobalWallets;
