/**
 * @file configurator.js
 * @description Global configuration store for Zenfuse (e.g. custom HTTPS agent).
 * Uses a global Symbol so config is shared across all Zenfuse instances.
 */
const confSymbol = Symbol.for('zenfuse.configuration');

if (!global[confSymbol]) {
    global[confSymbol] = new Map();
}

/** Zenfuse global configurator. Use zenfuse.config in the main package. */
module.exports = {
    /** @param {string} key - Config key. @returns {*} Stored value. */
    get(key) {
        return global[confSymbol].get(key);
    },

    /** @param {string} key - Config key. @param {*} value - Value to store. */
    set(key, value) {
        global[confSymbol].set(key, value);
    },

    /** @param {string} key - Config key to remove. */
    delete(key) {
        return global[confSymbol].delete(key);
    },

    /** @param {string} key - Config key. @returns {boolean} Whether the key exists. */
    has(key) {
        return global[confSymbol].has(key);
    },
};
