/**
 * @file exchange.error.js
 * @description Base exception for exchange API errors. Carries standard error codes used across exchanges.
 */

const ZenfuseBaseError = require('./base.error');

/** Base class for exchange API exceptions; provides standard error codes. */
class ExchangeBaseException extends ZenfuseBaseError {
    /** @type {Object.<string, string>} Standard Zenfuse error codes for exchange errors. */
    static errorCodes = {
        INVALID_CREDENTIALS: 'INVALID_CREDENTIALS',
        INSUFFICIENT_FUNDS: 'INSUFFICIENT_FUNDS',
        INVALID_ORDER: 'INVALID_ORDER',
        UNKNOWN_EXCEPTION: 'UNKNOWN_EXCEPTION',
    };
}

module.exports = ExchangeBaseException;
