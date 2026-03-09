/**
 * @file metadata.js
 * @description Maps Zenfuse interval names to Binance API interval strings (e.g. '1m' -> 'm1').
 */
/**
 * Zenfuse interval key -> Binance interval value.
 * @enum {string}
 */
const timeIntervals = {
    '1m': 'm1',
    '3m': 'm3',
    '5m': 'm5',
    '15m': 'm15',
    '30m': 'm30',
    '1h': 'h1',
    '2h': 'h2',
    '4h': 'h4',
    '6h': 'h6',
    '8h': 'h8',
    '12h': 'h12',
    '1d': 'd1',
    '3d': 'd3',
    '1w': 'w1',
    '1M': 'M1',
};

module.exports = {
    timeIntervals,
};
