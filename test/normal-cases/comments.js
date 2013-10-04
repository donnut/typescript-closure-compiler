/**
 * @param {Function} d
 * @param {Function} b
 */
function __extends(d, b) {
  /** @constructor */ function __() { this.constructor = d; }
  __.prototype = b.prototype;
  d.prototype = new __();
}

/**
 * "* /"
 *
 * @constructor
 * @struct
 */
var MustNotBreak = function () {
};

/**
 * class A implements C
 *
 * @constructor
 * @struct
 * @implements {C}
 */
var A = function () {
  /**
   * a: number
   *
   * @type {number}
   */
  this.a;
};

/**
 * c(a: number): boolean
 *
 * @param {number} a
 * @returns {boolean}
 */
A.prototype.c = function (a) {
  return false;
};

/**
 * static d(a: number): boolean
 *
 * @param {number} a
 * @returns {boolean}
 */
A.d = function (a) {
  return false;
};

/**
 * static b: number
 *
 * @type {number}
 */
A.b;

/**
 * class B extends A
 *
 * constructor()
 *
 * @constructor
 * @struct
 * @extends {A}
 */
var B = function () {
  A.call(this);
};

__extends(B, A);

/**
 * interface A
 *
 * @interface
 */
var C = function () {
};

/**
 * a: number
 *
 * @type {number}
 */
C.prototype.a;

/**
 * c(a: number): boolean
 *
 * @param {number} a
 * @returns {boolean}
 */
C.prototype.c = function (a) {
};

/**
 * module M
 */
var M = {};

/**
 * enum E
 *
 * @enum {number}
 */
M.E = {
  // enum E.A
  A: 100,
  // enum E.B
  B: 101
};
