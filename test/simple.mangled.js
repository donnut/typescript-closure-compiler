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

/** @type {?Object} */ var empty = {};

/**
 * @enum {number}
 */
var Foo = {
  ABC$mangled: 0,
  XYZ$mangled: 100
};

/** @type {number} */ var v = 0;
/** @type {boolean} */ var v1 = false;
/** @type {number} */ var v2 = 0;

/**
 * @constructor
 * @struct
 */
var A = function () {
  /** @type {number} */ this.a$mangled;
  /** @type {number} */ this.e$mangled = 0;
};

/**
 * @param {number} a
 * @returns {boolean}
 */
A.prototype.c$mangled = function (a) {
  new A();
  return a === v;
};
/**
 * @param {number} a
 * @returns {boolean}
 */
A.d$mangled = function (a) {
  new A();
  return a === v;
};

/** @type {number} */ A.b$mangled;

/** @type {number} */ A.f$mangled = 0;

/**
 * @constructor
 * @struct
 * @extends {A}
 * @implements {I}
 */
var B = function () {
  A.call(this);
  /** @type {?} */ var capture = /** @type {?} */ (A.prototype);
};

__extends(B, A);

/**
 * @interface
 */
var I = function () {
};

/** @type {number} */ I.prototype.a$mangled;
/**
 * @param {number} a
 * @returns {boolean}
 */
I.prototype.c$mangled = function (a) {
};

/**
 * @param {number} index
 * @returns {string}
 */
var f = function (index) {
  /** @type {?} */ var a;
  /** @type {undefined} */ var b = void 0;
  /** @type {number} */ var c = 0;
  /** @type {string} */ var d = '';
  /** @type {boolean} */ var e = false;
  /** @type {Array.<?>} */ var f = [];
  /** @type {Array.<string>} */ var g = [''];
  /** @type {Array.<Array.<string>>} */ var h = [['']];
  /** @type {?function(): number} */ var i = function () {
    return 0;
  };
  /** @type {?{ 0: string }} */ var j = { 0: 'a' };
  /** @type {?{ a$mangled: number }} */ var k = { a$mangled: 0 };
  /** @type {Object.<number, string>} */ var l = { 0: 'a' };
  /** @type {Object.<string, number>} */ var m = { 'a': 0 };
  return '';
};

var M = {};

/**
 * @enum {number}
 */
M.Foo$mangled = {
  ABC$mangled: 0,
  XYZ$mangled: 100
};

/** @type {number} */ M.v$mangled = 0;
/** @type {boolean} */ M.v1$mangled = false;
/** @type {number} */ M.v2$mangled = 0;

/**
 * @constructor
 * @struct
 */
M.A$mangled = function () {
  /** @type {number} */ this.a$mangled;
  /** @type {number} */ this.e$mangled = 0;
};

/**
 * @param {number} a
 * @returns {boolean}
 */
M.A$mangled.prototype.c$mangled = function (a) {
  new M.A$mangled();
  return a === M.v$mangled;
};
/**
 * @param {number} a
 * @returns {boolean}
 */
M.A$mangled.d$mangled = function (a) {
  new M.A$mangled();
  return a === M.v$mangled;
};

/** @type {number} */ M.A$mangled.b$mangled;

/** @type {number} */ M.A$mangled.f$mangled = 0;

/**
 * @constructor
 * @struct
 * @extends {M.A$mangled}
 * @implements {M.I$mangled}
 */
M.B$mangled = function () {
  M.A$mangled.call(this);
  /** @type {?} */ var capture = /** @type {?} */ (M.A$mangled.prototype);
};

__extends(M.B$mangled, M.A$mangled);

/**
 * @interface
 */
M.I$mangled = function () {
};

/** @type {number} */ M.I$mangled.prototype.a$mangled;
/**
 * @param {number} a
 * @returns {boolean}
 */
M.I$mangled.prototype.c$mangled = function (a) {
};

/**
 * @param {number} index
 * @returns {string}
 */
M.f$mangled = function (index) {
  var g = function () {
    /** @type {number} */ var h = 0;
  };
  /** @type {number} */ var x = index;
  return '';
};

M.MM$mangled = {};

/**
 * @enum {number}
 */
M.MM$mangled.Foo$mangled = {
  ABC$mangled: 0,
  XYZ$mangled: 100
};

/** @type {number} */ M.MM$mangled.v$mangled = 0;
/** @type {boolean} */ M.MM$mangled.v1$mangled = false;
/** @type {number} */ M.MM$mangled.v2$mangled = 0;

/**
 * @constructor
 * @struct
 */
M.MM$mangled.A$mangled = function () {
  /** @type {number} */ this.a$mangled;
  /** @type {number} */ this.e$mangled = 0;
};

/**
 * @param {number} a
 * @returns {boolean}
 */
M.MM$mangled.A$mangled.prototype.c$mangled = function (a) {
  new M.MM$mangled.A$mangled();
  return a === M.MM$mangled.v$mangled;
};
/**
 * @param {number} a
 * @returns {boolean}
 */
M.MM$mangled.A$mangled.d$mangled = function (a) {
  new M.MM$mangled.A$mangled();
  return a === M.MM$mangled.v$mangled;
};

/** @type {number} */ M.MM$mangled.A$mangled.b$mangled;

/** @type {number} */ M.MM$mangled.A$mangled.f$mangled = 0;

/**
 * @constructor
 * @struct
 * @extends {M.MM$mangled.A$mangled}
 * @implements {M.MM$mangled.I$mangled}
 */
M.MM$mangled.B$mangled = function () {
  M.MM$mangled.A$mangled.call(this);
  /** @type {?} */ var capture = /** @type {?} */ (M.MM$mangled.A$mangled.prototype);
};

__extends(M.MM$mangled.B$mangled, M.MM$mangled.A$mangled);

/**
 * @interface
 */
M.MM$mangled.I$mangled = function () {
};

/** @type {number} */ M.MM$mangled.I$mangled.prototype.a$mangled;
/**
 * @param {number} a
 * @returns {boolean}
 */
M.MM$mangled.I$mangled.prototype.c$mangled = function (a) {
};

/**
 * @param {number} index
 * @returns {string}
 */
M.MM$mangled.f$mangled = function (index) {
  /** @type {number} */ var x = index;
  /** @type {?{ foo$mangled: ?function(new:M.MM$mangled.I$mangled, number, number) }} */ var y = null;
  /** @type {?} */ var z = null;
  /** @type {?} */ var w = { 'foo bar': 0 };
  /** @type {?function(): ?} */ var functionExpression1 = function foo() {
    return foo;
  };
  /** @type {?{ foo$mangled: ?function(): ? }} */ var functionExpression2 = { foo$mangled: function bar() {
      return bar;
    } };
  return '';
};

/** @type {?function(): ?} */ M.MM$mangled.functionExpression1$mangled = function foo() {
  return foo;
};
/** @type {?{ foo$mangled: ?function(): ? }} */ M.MM$mangled.functionExpression2$mangled = { foo$mangled: function bar() {
    return bar;
  } };

M.MM$mangled.tryCatch1$mangled = function () {
  try  {
    /** @type {?} */ var foo;
    foo = 100;
    foo = '';
  } catch (e) {
    foo = e;
  }
};

M.MM$mangled.tryCatch2$mangled = function () {
  try  {
    try  {
      throw null;
    } catch (e) {
    }
    /** @type {?} */ var foo;
    foo = 100;
    foo = '';
  } catch (e) {
    foo = e;
  }
};

/**
 * @typedef {Object.<string, M.MM$mangled.A$mangled>}
 */
M.MM$mangled.IndexFoo$mangled;

/**
 * @typedef {(Object.<string, M.MM$mangled.A$mangled>|Object.<number, M.MM$mangled.B$mangled>)}
 */
M.MM$mangled.IndexFoo2$mangled;

/**
 * @typedef {?function(string): M.MM$mangled.A$mangled}
 */
M.MM$mangled.CallFoo$mangled;

/**
 * @typedef {(?function(string): M.MM$mangled.A$mangled|?function(number): M.MM$mangled.B$mangled)}
 */
M.MM$mangled.CallFoo2$mangled;

/**
 * @param {...number} foo$rest
 * @returns {number}
 */
M.MM$mangled.test1$mangled = function (foo$rest) {
  /** @type {Array.<number>} */ var foo = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    foo[_i] = arguments[_i];
  }
  return foo.length;
};

/**
 * @param {string} a
 * @param {string} b
 * @param {...number} foo$rest
 * @returns {number}
 */
M.MM$mangled.test2$mangled = function (a, b, foo$rest) {
  /** @type {Array.<number>} */ var foo = [];
  for (var _i = 0; _i < arguments.length - 2; _i++) {
    foo[_i] = arguments[_i + 2];
  }
  return foo.length;
};

/**
 * @param {boolean} a
 * @param {string=} b
 * @param {number=} c
 */
M.MM$mangled.test3$mangled = function (a, b, c) {
  if (typeof b === "undefined") b = '';
  if (typeof c === "undefined") c = 0;
};

/** @type {?function(...[?])} */ M.MM$mangled.test4$mangled = null;
/** @type {?function(...[number])} */ M.MM$mangled.test5$mangled = null;

/**
 * @param {number=} baz
 * @constructor
 * @struct
 */
M.MM$mangled.Test1$mangled = function (baz) {
  if (typeof baz === "undefined") baz = 3;
  /** @type {number} */ this.baz$mangled = baz;
  /** @type {number} */ this.foo$mangled = 1;
};

M.MM$mangled.Test1$mangled.prototype.f$mangled = function () {
  var _this = this;
  /** @type {?function(): number} */ var foo = function () {
    return _this.foo$mangled;
  };
};

/** @type {number} */ M.MM$mangled.Test1$mangled.bar$mangled = 2;

/**
 * @constructor
 * @struct
 * @extends {M.MM$mangled.Test1$mangled}
 */
M.MM$mangled.Test2$mangled = function () {
  M.MM$mangled.Test1$mangled.call(this);
};

__extends(M.MM$mangled.Test2$mangled, M.MM$mangled.Test1$mangled);

M.MM$mangled.Test2$mangled.prototype.f$mangled = function () {
  M.MM$mangled.Test1$mangled.prototype.f$mangled.call(this);
};
