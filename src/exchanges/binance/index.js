/**
 * @file index.js
 * @description Binance exchange wallet exports. Use zenfuse.Binance.spot for spot trading.
 */
const BinanceSpot = require('./wallets/spot');

// prettier-ignore
/**
 * Binance wallet types. spot: BinanceSpot class for spot API.
 * @enum {typeof BinanceSpot}
 */
const BinanceWallets = {
    'spot': BinanceSpot,
};

module.exports = BinanceWallets;
