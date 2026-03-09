/**
 * @file runtime.error.js
 * @description Runtime errors (cache out of sync, order not found, etc.).
 */

class ZenfuseRuntimeError extends Error {
    /** Human-readable descriptions for each error code. */
    static details = {
        // eslint-disable-next-line @cspell/spellchecker
        ZEFU_CACHE_UNSYNC: 'Zenfuse global cache out of sync',
        ZEFU_ORDER_NOT_FOUND: 'Required order not found',
    };

    /**
     * @param {string} msg Error message
     * @param {string} [code] Optional error code (e.g. ZEFU_CACHE_UNSYNC, ZEFU_ORDER_NOT_FOUND)
     */
    constructor(msg, code) {
        super(msg);
        this.code = code;
        this.details = ZenfuseRuntimeError.details[code];
    }
}

module.exports = ZenfuseRuntimeError;
