/**
 * @typedef {import('../src/index.js').Order} Order
 * @typedef {import('../src/index.js').timeInterval} timeInterval
 */

/**
 * @typedef {object} MasterTestEnvironment
 * @property {string} API_PUBLIC_KEY
 * @property {string} API_PRIVATE_KEY
 * @property {object} CANDLES_REQUEST
 * @property {string} CANDLES_REQUEST.symbol
 * @property {timeInterval} CANDLES_REQUEST.interval
 * @property {Order} BUY_MARKET_ORDER
 * @property {Order} SELL_MARKET_ORDER
 * @property {Order} BUY_LIMIT_ORDER
 * @property {Order} SELL_LIMIT_ORDER
 * @property {Order} NOT_EXECUTABLE_ORDER An order that will never be executed. Usually a pair of stablecoins for a half price.
 * @property {Order} PRECISION_REQUIRED_ORDER
 * @property {Order} PRECISION_IMPOSSIBLE_ORDER
 * @property {object} PRICE_SUBSCRIPTION
 * @property {string} PRICE_SUBSCRIPTION.channel
 * @property {string} PRICE_SUBSCRIPTION.symbol
 * @property {object} CANDLE_SUBSCRIPTION
 * @property {string} CANDLE_SUBSCRIPTION.channel
 * @property {string} CANDLE_SUBSCRIPTION.symbol
 * @property {timeInterval} CANDLE_SUBSCRIPTION.interval
 */
const testEnv = require('./helpers/testEnv.js');
