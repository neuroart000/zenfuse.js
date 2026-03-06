/**
 * @file index.js
 * @description Huobi exchange wallet exports. Use zenfuse.Huobi.spot for spot trading.
 */
const HuobiSpot = require('./wallets/spot');

// prettier-ignore
/**
 * Huobi wallet types. spot: HuobiSpot class for spot API.
 * @enum {typeof HuobiSpot}
 */
const HuobiWallets = {
    'spot': HuobiSpot,
};

module.exports = HuobiWallets;
