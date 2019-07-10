/**
 * Cached Array constructor.
 *
 * @class Array
 */
export const ArrayCtr = [].constructor;

/**
 * Cached Array constructor.
 *
 * @class Boolean
 */
export const BooleanCtr = true.constructor;

const noop = function noop() {
  return undefined;
};

/**
 * Cached Array constructor.
 *
 * @class Function
 */
export const FunctionCtr = noop.constructor;

/**
 * Cached Array constructor.
 *
 * @class Number
 */
export const NumberCtr = (0).constructor;

/**
 * Cached Array constructor.
 *
 * @class Object
 */
export const ObjectCtr = {}.constructor;

/**
 * Cached Array constructor.
 *
 * @class RegExp
 */
export const RegExpCtr = /none/.constructor;

/**
 * Cached Array constructor.
 *
 * @class String
 */
export const StringCtr = ''.constructor;
