/**
 * @file zenfuse.js
 * @description Main ESM entry point for the Zenfuse crypto trading library.
 * Exports exchange clients (Binance, Huobi, Bitglobal, OKX), error codes, and global config.
 */

import Binance from './exchanges/binance/index.js';
import Huobi from './exchanges/huobi/index.js';
import Bitglobal from './exchanges/bitglobal/index.js';
import OKX from './exchanges/okx/index.js';

import ExchangeBaseException from './base/errors/exchange.error.js';
import configurator from './base/conf/configurator.js';

/** Standard error codes thrown by exchange API errors. */
const errorCodes = ExchangeBaseException.errorCodes;

/** Global configuration store for Zenfuse (e.g. custom HTTPS agent). */
const config = configurator;

/** Zenfuse library public API. */
export const zenfuse = {
    Binance,
    Huobi,
    Bitglobal,
    OKX,
    ////
    errorCodes,
    config,
};

export default zenfuse;
