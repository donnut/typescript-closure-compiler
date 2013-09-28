/**
 * compile with --const
 *
 * @constructor
 * @struct
 */
var Foo$mangled = function () {
};

/** @const {?} */ var a$mangled = null;
/** @const {boolean} */ var b$mangled = false;
/** @const {boolean} */ var c$mangled = true;
/** @const {number} */ var d$mangled = 0;
/** @const {string} */ var e$mangled = '';
/** @const {RegExp} */ var f$mangled = /./;

/** @type {Foo$mangled} */ var g$mangled = new Foo$mangled();
/** @type {number} */ var h$mangled = 0;
/** @type {number} */ var i$mangled = 0;
h$mangled = 1;
i$mangled++;

var M$mangled = {};

/** @const {?} */ M$mangled.a$mangled = null;
/** @const {boolean} */ M$mangled.b$mangled = false;
/** @const {boolean} */ M$mangled.c$mangled = true;
/** @const {number} */ M$mangled.d$mangled = 0;
/** @const {string} */ M$mangled.e$mangled = '';
/** @const {RegExp} */ M$mangled.f$mangled = /./;

/** @type {Foo$mangled} */ M$mangled.g$mangled = new Foo$mangled();
/** @type {number} */ M$mangled.h$mangled = 0;
/** @type {number} */ M$mangled.i$mangled = 0;
/** @type {number} */ M$mangled.j$mangled = 0;
/** @type {number} */ M$mangled.k$mangled = 0;
M$mangled.h$mangled = 1;
M$mangled.i$mangled++;
M$mangled.j$mangled = 1;
M$mangled.k$mangled++;

/**
 * @constructor
 * @struct
 */
var C$mangled = function () {
  /** @type {?} */ this.A$mangled = null;
  /** @type {boolean} */ this.B$mangled = false;
  /** @type {boolean} */ this.C$mangled = true;
  /** @type {number} */ this.D$mangled = 0;
  /** @type {string} */ this.E$mangled = '';
  /** @type {RegExp} */ this.F$mangled = /./;
  /** @type {Foo$mangled} */ this.G$mangled = new Foo$mangled();
};

C$mangled.foo$mangled = function () {
  C$mangled.h$mangled = 1;
  C$mangled.i$mangled++;
};

/** @const {?} */ C$mangled.a$mangled = null;
/** @const {boolean} */ C$mangled.b$mangled = false;
/** @const {boolean} */ C$mangled.c$mangled = true;
/** @const {number} */ C$mangled.d$mangled = 0;
/** @const {string} */ C$mangled.e$mangled = '';
/** @const {RegExp} */ C$mangled.f$mangled = /./;

/** @type {Foo$mangled} */ C$mangled.g$mangled = new Foo$mangled();
/** @type {number} */ C$mangled.h$mangled = 0;
/** @type {number} */ C$mangled.i$mangled = 0;
