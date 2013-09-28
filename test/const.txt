/**
 * compile with --const
 *
 * @constructor
 * @struct
 */
var Foo = function () {
};

/** @const {?} */ var a = null;
/** @const {boolean} */ var b = false;
/** @const {boolean} */ var c = true;
/** @const {number} */ var d = 0;
/** @const {string} */ var e = '';
/** @const {RegExp} */ var f = /./;

/** @type {Foo} */ var g = new Foo();
/** @type {number} */ var h = 0;
/** @type {number} */ var i = 0;
h = 1;
i++;

var M = {};

/** @const {?} */ M.a = null;
/** @const {boolean} */ M.b = false;
/** @const {boolean} */ M.c = true;
/** @const {number} */ M.d = 0;
/** @const {string} */ M.e = '';
/** @const {RegExp} */ M.f = /./;

/** @type {Foo} */ M.g = new Foo();
/** @type {number} */ M.h = 0;
/** @type {number} */ M.i = 0;
/** @type {number} */ M.j = 0;
/** @type {number} */ M.k = 0;
M.h = 1;
M.i++;
M.j = 1;
M.k++;

/**
 * @constructor
 * @struct
 */
var C = function () {
  /** @type {?} */ this.A = null;
  /** @type {boolean} */ this.B = false;
  /** @type {boolean} */ this.C = true;
  /** @type {number} */ this.D = 0;
  /** @type {string} */ this.E = '';
  /** @type {RegExp} */ this.F = /./;
  /** @type {Foo} */ this.G = new Foo();
};

C.foo = function () {
  C.h = 1;
  C.i++;
};

/** @const {?} */ C.a = null;
/** @const {boolean} */ C.b = false;
/** @const {boolean} */ C.c = true;
/** @const {number} */ C.d = 0;
/** @const {string} */ C.e = '';
/** @const {RegExp} */ C.f = /./;

/** @type {Foo} */ C.g = new Foo();
/** @type {number} */ C.h = 0;
/** @type {number} */ C.i = 0;
