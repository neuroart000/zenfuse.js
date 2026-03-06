/**
 * @file metadata.js
 * @description Maps Zenfuse interval names to OKX API interval strings (e.g. '1m' -> 'candle1m').
 */
/**
 * Zenfuse interval key -> OKX channel/interval value (null where not supported).
 * @enum {string|null}
 */
const timeIntervals = {
    '1m': 'candle1m',
    '3m': 'candle3m',
    '5m': 'candle5m',
    '15m': 'candle15m',
    '30m': 'candle30m',
    '1h': 'candle1H',
    '2h': 'candle2H',
    '4h': 'candle4H',
    '6h': 'candle6H',
    '8h': null,
    '12h': 'candle12H',
    '1d': 'candle1D',
    '3d': null,
    '1w': 'candle1W',
    '1M': 'candle1M',
};

module.exports = {
    timeIntervals,
};
