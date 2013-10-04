/**
 * @interface
 */
var A = function () {
};

/**
 * @param {B} b
 * @returns {?}
 */
A.prototype.a = function (b) {
};

/**
 * @constructor
 * @struct
 */
var B = function () {
};

/**
 * @param {A} d
 */
B.prototype.c = function (d) {
};

/**
 * @constructor
 * @struct
 */
var C = function () {
};

/**
 * @param {B} b
 */
C.prototype.e = function (b) {
  b.c(new D());
};
/**
 * The TypeScript 0.9.1-1 compiler stores the symbol in "A" and not "A<void>" here
 *
 * @constructor
 * @struct
 * @implements {A}
 */
var D = function () {
};

/**
 * @param {B} b
 */
D.prototype.a = function (b) {
};
