/**
 * @file api.error.js
 * @description Maps Bybit API error codes to Zenfuse error codes.
 */
const ExchangeBaseException = require('../../../base/errors/exchange.error');
const utils = require('../../../base/utils/utils');

/** Bybit API error; maps response codes to zenfuse error codes and attaches original response. */
class BybitApiException extends ExchangeBaseException {
    static codesMap = new Map([
        [-1022, 'INVALID_CREDENTIALS'],
        [-2014, 'INVALID_CREDENTIALS'],
        [-2015, 'INVALID_CREDENTIALS'],
        [-2010, 'INSUFFICIENT_FUNDS'],
    ]);

    /**
     * @param {import('got').HTTPError} err
     */
    constructor(err) {
        super(err.response.body.msg);

        const bErrCode = err.response.body.code;

        if (BybitApiException.codesMap.has(bErrCode)) {
            this.code = BybitApiException.codesMap.get(err.response.body.code);
        } else {
            this.code = 'UNKNOWN_EXCEPTION';
        }

        this.response = err.response.body;
        this.httpError = err;

        utils.linkOriginalPayload(this, err.response.body);
    }
}

module.exports = BybitApiException;
