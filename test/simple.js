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
  ABC: 0,
  XYZ: 100
};

/** @type {number} */ var v = 0;
/** @type {boolean} */ var v1 = false;
/** @type {number} */ var v2 = 0;

/**
 * @constructor
 * @struct
 */
var A = function () {
  /** @type {number} */ this.a;
  /** @type {number} */ this.e = 0;
};

/**
 * @param {number} a
 * @returns {boolean}
 */
A.prototype.c = function (a) {
  new A();
  return a === v;
};
/**
 * @param {number} a
 * @returns {boolean}
 */
A.d = function (a) {
  new A();
  return a === v;
};

/** @type {number} */ A.b;

/** @type {number} */ A.f = 0;

/**
 * @constructor
 * @struct
 * @extends {A}
 * @implements {I}
 */
var B = function () {
  A.call(this);
  window['console'].log(A.prototype, this.c(/** @type {number} */ (window['foo'])));
};

__extends(B, A);

/**
 * @interface
 */
var I = function () {
};

/** @type {number} */ I.prototype.a;
/**
 * @param {number} a
 * @returns {boolean}
 */
I.prototype.c = function (a) {
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
  /** @type {?{ a: number }} */ var k = { a: 0 };
  /** @type {Object.<number, string>} */ var l = { 0: 'a' };
  /** @type {Object.<string, number>} */ var m = { a: 0 };
  return '';
};

var M = {};

/**
 * @enum {number}
 */
M.Foo = {
  ABC: 0,
  XYZ: 100
};

/** @type {number} */ M.v = 0;
/** @type {boolean} */ M.v1 = false;
/** @type {number} */ M.v2 = 0;

/**
 * @constructor
 * @struct
 */
M.A = function () {
  /** @type {number} */ this.a;
  /** @type {number} */ this.e = 0;
};

/**
 * @param {number} a
 * @returns {boolean}
 */
M.A.prototype.c = function (a) {
  new M.A();
  return a === M.v;
};
/**
 * @param {number} a
 * @returns {boolean}
 */
M.A.d = function (a) {
  new M.A();
  return a === M.v;
};

/** @type {number} */ M.A.b;

/** @type {number} */ M.A.f = 0;

/**
 * @constructor
 * @struct
 * @extends {M.A}
 * @implements {M.I}
 */
M.B = function () {
  M.A.call(this);
  window['console'].log(M.A.prototype);
};

__extends(M.B, M.A);

/**
 * @interface
 */
M.I = function () {
};

/** @type {number} */ M.I.prototype.a;
/**
 * @param {number} a
 * @returns {boolean}
 */
M.I.prototype.c = function (a) {
};

/**
 * @param {number} index
 * @returns {string}
 */
M.f = function (index) {
  var g = function () {
    /** @type {number} */ var h = 0;
  };
  /** @type {number} */ var x = index;
  return '';
};

M.MM = {};

/**
 * @enum {number}
 */
M.MM.Foo = {
  ABC: 0,
  XYZ: 100
};

/** @type {number} */ M.MM.v = 0;
/** @type {boolean} */ M.MM.v1 = false;
/** @type {number} */ M.MM.v2 = 0;

/**
 * @constructor
 * @struct
 */
M.MM.A = function () {
  /** @type {number} */ this.a;
  /** @type {number} */ this.e = 0;
};

/**
 * @param {number} a
 * @returns {boolean}
 */
M.MM.A.prototype.c = function (a) {
  new M.MM.A();
  return a === M.MM.v;
};
/**
 * @param {number} a
 * @returns {boolean}
 */
M.MM.A.d = function (a) {
  new M.MM.A();
  return a === M.MM.v;
};

/** @type {number} */ M.MM.A.b;

/** @type {number} */ M.MM.A.f = 0;

/**
 * @constructor
 * @struct
 * @extends {M.MM.A}
 * @implements {M.MM.I}
 */
M.MM.B = function () {
  M.MM.A.call(this);
  window['console'].log(M.MM.A.prototype);
};

__extends(M.MM.B, M.MM.A);

/**
 * @interface
 */
M.MM.I = function () {
};

/** @type {number} */ M.MM.I.prototype.a;
/**
 * @param {number} a
 * @returns {boolean}
 */
M.MM.I.prototype.c = function (a) {
};

/**
 * @param {number} index
 * @returns {string}
 */
M.MM.f = function (index) {
  /** @type {number} */ var x = index;
  /** @type {?{ foo: ?function(new:M.MM.I, number, number) }} */ var y = null;
  /** @type {?} */ var z = null;
  /** @type {?} */ var w = { 'foo bar': 0 };
  /** @type {?function(): ?} */ var functionExpression1 = function foo() {
    return foo;
  };
  /** @type {?{ foo: ?function(): ? }} */ var functionExpression2 = { foo: function bar() {
      return bar;
    } };
  return '';
};

/** @type {?function(): ?} */ M.MM.functionExpression1 = function foo() {
  return foo;
};
/** @type {?{ foo: ?function(): ? }} */ M.MM.functionExpression2 = { foo: function bar() {
    return bar;
  } };

M.MM.tryCatch1 = function () {
  try  {
    /** @type {?} */ var foo;
    foo = 100;
    foo = '';
  } catch (e) {
    foo = e;
  }
};

M.MM.tryCatch2 = function () {
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
 * @typedef {Object.<string, M.MM.A>}
 */
M.MM.IndexFoo;

/**
 * @typedef {(Object.<string, M.MM.A>|Object.<number, M.MM.B>)}
 */
M.MM.IndexFoo2;

/**
 * @typedef {?function(string): M.MM.A}
 */
M.MM.CallFoo;

/**
 * @typedef {(?function(string): M.MM.A|?function(number): M.MM.B)}
 */
M.MM.CallFoo2;

/**
 * @param {...number} foo$rest
 * @returns {number}
 */
M.MM.test1 = function (foo$rest) {
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
M.MM.test2 = function (a, b, foo$rest) {
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
M.MM.test3 = function (a, b, c) {
  if (typeof b === "undefined") b = '';
  if (typeof c === "undefined") c = 0;
};

/** @type {?function(...[?])} */ M.MM.test4 = null;
/** @type {?function(...[number])} */ M.MM.test5 = null;

/**
 * @param {number=} baz
 * @constructor
 * @struct
 */
M.MM.Test1 = function (baz) {
  if (typeof baz === "undefined") baz = 3;
  /** @type {number} */ this.baz = baz;
  /** @type {number} */ this.foo = 1;
};

M.MM.Test1.prototype.f = function () {
  var _this = this;
  /** @type {?function(): number} */ var foo = function () {
    return _this.foo;
  };
};

/** @type {number} */ M.MM.Test1.bar = 2;

/**
 * @constructor
 * @struct
 * @extends {M.MM.Test1}
 */
M.MM.Test2 = function () {
  M.MM.Test1.call(this);
};

__extends(M.MM.Test2, M.MM.Test1);

M.MM.Test2.prototype.f = function () {
  M.MM.Test1.prototype.f.call(this);
};
