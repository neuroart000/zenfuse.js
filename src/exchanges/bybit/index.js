/**
 * @file index.js
 * @description Bybit exchange wallet exports. Use zenfuse.Bybit.spot for spot trading.
 */
const BybitSpot = require('./wallets/spot');

// prettier-ignore
/**
 * Bybit wallet types. spot: BybitSpot class for spot API.
 * @enum {typeof BybitSpot}
 */
const BybitWallets = {
    'spot': BybitSpot,
};

module.exports = BybitWallets;
