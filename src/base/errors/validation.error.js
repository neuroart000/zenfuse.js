/**
 * @file validation.error.js
 * @description Validation errors wrapping Zod errors (e.g. invalid order or params).
 */

const UserError = require('./user.error');

/** Validation error with field-level details from Zod. */
class ZenfuseValidationError extends UserError {
    /**
     * @param {string} name - Validation context name (e.g. 'InvalidOrder')
     * @param {import('zod').ZodError} zodError - Zod validation error
     */
    constructor(name, zodError) {
        super('VALIDATION_FAILED');
        this.name = name;
        this.zodError = zodError;

        this.message = zodError.errors
            .map((e) => `${e.path.join('.')} ${e.message}`.trim())
            .join('\n');
    }
}

module.exports = ZenfuseValidationError;
