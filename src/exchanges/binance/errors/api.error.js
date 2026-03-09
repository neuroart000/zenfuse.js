/**
 * @file api.error.js
 * @description Maps Binance API error codes to Zenfuse error codes. @see https://binance-docs.github.io/apidocs/spot/en/#error-codes
 */
const ExchangeBaseException = require('../../../base/errors/exchange.error');
const utils = require('../../../base/utils/utils');

/** Binance API error; maps response codes to zenfuse error codes and attaches original response. */
class BinanceApiException extends ExchangeBaseException {
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

        if (BinanceApiException.codesMap.has(bErrCode)) {
            this.code = BinanceApiException.codesMap.get(
                err.response.body.code,
            );
        } else {
            this.code = 'UNKNOWN_EXCEPTION';
        }

        this.response = err.response.body;
        this.httpError = err;

        utils.linkOriginalPayload(this, err.response.body);
    }
}

module.exports = BinanceApiException;
