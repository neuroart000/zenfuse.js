/**
 * @file api.error.js
 * @description Huobi API error; attaches response and optional HTTP error.
 */
const ZenfuseBaseError = require('../../../base/errors/base.error');

/** Huobi API error with err-msg and optional HTTP error reference. */
class HuobiApiError extends ZenfuseBaseError {
    /**
     * @param {*} res
     * @param {import('got').HTTPError} err
     */
    constructor(res, err) {
        if (res) {
            super(res['err-msg']);
            this.response = res;
            this.httpError = err;
        } else {
            super(err.response.body['err-msg']);
            this.response = err.response.body;
            this.httpError = err;
        }
    }
}

module.exports = HuobiApiError;
