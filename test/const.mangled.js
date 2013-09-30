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

/** @const {?} */ M.a$mangled = null;
/** @const {boolean} */ M.b$mangled = false;
/** @const {boolean} */ M.c$mangled = true;
/** @const {number} */ M.d$mangled = 0;
/** @const {string} */ M.e$mangled = '';
/** @const {RegExp} */ M.f$mangled = /./;

/** @type {Foo} */ M.g$mangled = new Foo();
/** @type {number} */ M.h$mangled = 0;
/** @type {number} */ M.i$mangled = 0;
/** @type {number} */ M.j$mangled = 0;
/** @type {number} */ M.k$mangled = 0;
M.h$mangled = 1;
M.i$mangled++;
M.j$mangled = 1;
M.k$mangled++;

/**
 * @constructor
 * @struct
 */
var C = function () {
  /** @type {?} */ this.A$mangled = null;
  /** @type {boolean} */ this.B$mangled = false;
  /** @type {boolean} */ this.C$mangled = true;
  /** @type {number} */ this.D$mangled = 0;
  /** @type {string} */ this.E$mangled = '';
  /** @type {RegExp} */ this.F$mangled = /./;
  /** @type {Foo} */ this.G$mangled = new Foo();
};

C.foo$mangled = function () {
  C.h$mangled = 1;
  C.i$mangled++;
};

/** @const {?} */ C.a$mangled = null;
/** @const {boolean} */ C.b$mangled = false;
/** @const {boolean} */ C.c$mangled = true;
/** @const {number} */ C.d$mangled = 0;
/** @const {string} */ C.e$mangled = '';
/** @const {RegExp} */ C.f$mangled = /./;

/** @type {Foo} */ C.g$mangled = new Foo();
/** @type {number} */ C.h$mangled = 0;
/** @type {number} */ C.i$mangled = 0;
