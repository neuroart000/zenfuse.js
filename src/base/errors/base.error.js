/**
 * @file base.error.js
 * @description Base error class for all Zenfuse errors. Other error types extend this.
 */

class ZenfuseBaseError extends Error {
    /**
     * @param {string} msg Error message
     */
    constructor(msg) {
        super(msg);
    }
}

module.exports = ZenfuseBaseError;
