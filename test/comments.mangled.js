/**
 * @param {Function} d
 * @param {Function} b
 */
var __extends = function (d, b) {
  for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  /** @constructor */ function __() { this.constructor = d; }
  __.prototype = b.prototype;
  d.prototype = new __();
};

/**
 * "* /"
 *
 * @constructor
 * @struct
 */
var MustNotBreak$mangled = function () {
};

/**
 * class A implements C
 *
 * @constructor
 * @struct
 * @implements {C$mangled}
 */
var A$mangled = function () {
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
 * @param {number} a$mangled
 * @returns {boolean}
 */
A$mangled.prototype.c$mangled = function (a$mangled) {
  return false;
};

/**
 * static d(a: number): boolean
 *
 * @param {number} a$mangled
 * @returns {boolean}
 */
A$mangled.d$mangled = function (a$mangled) {
  return false;
};

/**
 * static b: number
 *
 * @type {number}
 */
A$mangled.b$mangled;

/**
 * class B extends A
 *
 * constructor()
 *
 * @constructor
 * @struct
 * @extends {A$mangled}
 */
var B$mangled = function () {
  A$mangled.call(this);
};

__extends(B$mangled, A$mangled);

/**
 * interface A
 *
 * @interface
 */
var C$mangled = function () {
};

/**
 * a: number
 *
 * @type {number}
 */
C$mangled.prototype.a$mangled;

/**
 * c(a: number): boolean
 *
 * @param {number} a$mangled
 * @returns {boolean}
 */
C$mangled.prototype.c$mangled = function (a$mangled) {
};

/**
 * module M
 */
var M$mangled = {};

/**
 * enum E
 *
 * @enum {number}
 */
M$mangled.E$mangled = {
  // enum E.A
  A$mangled: 100,
  // enum E.B
  B$mangled: 101
};
