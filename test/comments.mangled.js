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
  this.a$mangled;
};

/**
 * c(a: number): boolean
 *
 * @param {number} a
 * @returns {boolean}
 */
A.prototype.c$mangled = function (a) {
  return false;
};

/**
 * static d(a: number): boolean
 *
 * @param {number} a
 * @returns {boolean}
 */
A.d$mangled = function (a) {
  return false;
};

/**
 * static b: number
 *
 * @type {number}
 */
A.b$mangled;

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
C.prototype.a$mangled;

/**
 * c(a: number): boolean
 *
 * @param {number} a
 * @returns {boolean}
 */
C.prototype.c$mangled = function (a) {
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
M.E$mangled = {
  // enum E.A
  A$mangled: 100,
  // enum E.B
  B$mangled: 101
};
