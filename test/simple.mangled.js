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

/** @type {?Object} */ var empty$mangled = {};

/**
 * @enum {number}
 */
var Foo$mangled = {
  ABC$mangled: 0,
  XYZ$mangled: 100
};

/** @type {number} */ var v$mangled = 0;
/** @type {boolean} */ var v1$mangled = false;
/** @type {number} */ var v2$mangled = 0;

/**
 * @constructor
 * @struct
 */
var A$mangled = function () {
  /** @type {number} */ this.a$mangled;
  /** @type {number} */ this.e$mangled = 0;
};

/**
 * @param {number} a$mangled
 * @returns {boolean}
 */
A$mangled.prototype.c$mangled = function (a$mangled) {
  new A$mangled();
  return a$mangled === v$mangled;
};
/**
 * @param {number} a$mangled
 * @returns {boolean}
 */
A$mangled.d$mangled = function (a$mangled) {
  new A$mangled();
  return a$mangled === v$mangled;
};

/** @type {number} */ A$mangled.b$mangled;

/** @type {number} */ A$mangled.f$mangled = 0;

/**
 * @constructor
 * @struct
 * @extends {A$mangled}
 * @implements {I$mangled}
 */
var B$mangled = function () {
  A$mangled.call(this);
  /** @type {?} */ var capture$mangled = /** @type {?} */ (A$mangled.prototype);
};

__extends(B$mangled, A$mangled);

/**
 * @interface
 */
var I$mangled = function () {
};

/** @type {number} */ I$mangled.prototype.a$mangled;
/**
 * @param {number} a$mangled
 * @returns {boolean}
 */
I$mangled.prototype.c$mangled = function (a$mangled) {
};

/**
 * @param {number} index$mangled
 * @returns {string}
 */
var f$mangled = function (index$mangled) {
  /** @type {?} */ var a$mangled;
  /** @type {undefined} */ var b$mangled = void 0;
  /** @type {number} */ var c$mangled = 0;
  /** @type {string} */ var d$mangled = '';
  /** @type {boolean} */ var e$mangled = false;
  /** @type {Array.<?>} */ var f$mangled = [];
  /** @type {Array.<string>} */ var g$mangled = [''];
  /** @type {Array.<Array.<string>>} */ var h$mangled = [['']];
  /** @type {?function(): number} */ var i$mangled = function () {
    return 0;
  };
  /** @type {?{ 0: string }} */ var j$mangled = { 0: 'a' };
  /** @type {?{ a$mangled: number }} */ var k$mangled = { a$mangled: 0 };
  /** @type {Object.<number, string>} */ var l$mangled = { 0: 'a' };
  /** @type {Object.<string, number>} */ var m$mangled = { a$mangled: 0 };
  /** @type {?} */ var n$mangled = { 'a': 0 };
  return '';
};

var M$mangled = {};

/**
 * @enum {number}
 */
M$mangled.Foo$mangled = {
  ABC$mangled: 0,
  XYZ$mangled: 100
};

/** @type {number} */ M$mangled.v$mangled = 0;
/** @type {boolean} */ M$mangled.v1$mangled = false;
/** @type {number} */ M$mangled.v2$mangled = 0;

/**
 * @constructor
 * @struct
 */
M$mangled.A$mangled = function () {
  /** @type {number} */ this.a$mangled;
  /** @type {number} */ this.e$mangled = 0;
};

/**
 * @param {number} a$mangled
 * @returns {boolean}
 */
M$mangled.A$mangled.prototype.c$mangled = function (a$mangled) {
  new M$mangled.A$mangled();
  return a$mangled === M$mangled.v$mangled;
};
/**
 * @param {number} a$mangled
 * @returns {boolean}
 */
M$mangled.A$mangled.d$mangled = function (a$mangled) {
  new M$mangled.A$mangled();
  return a$mangled === M$mangled.v$mangled;
};

/** @type {number} */ M$mangled.A$mangled.b$mangled;

/** @type {number} */ M$mangled.A$mangled.f$mangled = 0;

/**
 * @constructor
 * @struct
 * @extends {M$mangled.A$mangled}
 * @implements {M$mangled.I$mangled}
 */
M$mangled.B$mangled = function () {
  M$mangled.A$mangled.call(this);
  /** @type {?} */ var capture$mangled = /** @type {?} */ (M$mangled.A$mangled.prototype);
};

__extends(M$mangled.B$mangled, M$mangled.A$mangled);

/**
 * @interface
 */
M$mangled.I$mangled = function () {
};

/** @type {number} */ M$mangled.I$mangled.prototype.a$mangled;
/**
 * @param {number} a$mangled
 * @returns {boolean}
 */
M$mangled.I$mangled.prototype.c$mangled = function (a$mangled) {
};

/**
 * @param {number} index$mangled
 * @returns {string}
 */
M$mangled.f$mangled = function (index$mangled) {
  var g$mangled = function () {
    /** @type {number} */ var h$mangled = 0;
  };
  /** @type {number} */ var x$mangled = index$mangled;
  return '';
};

M$mangled.MM$mangled = {};

/**
 * @enum {number}
 */
M$mangled.MM$mangled.Foo$mangled = {
  ABC$mangled: 0,
  XYZ$mangled: 100
};

/** @type {number} */ M$mangled.MM$mangled.v$mangled = 0;
/** @type {boolean} */ M$mangled.MM$mangled.v1$mangled = false;
/** @type {number} */ M$mangled.MM$mangled.v2$mangled = 0;

/**
 * @constructor
 * @struct
 */
M$mangled.MM$mangled.A$mangled = function () {
  /** @type {number} */ this.a$mangled;
  /** @type {number} */ this.e$mangled = 0;
};

/**
 * @param {number} a$mangled
 * @returns {boolean}
 */
M$mangled.MM$mangled.A$mangled.prototype.c$mangled = function (a$mangled) {
  new M$mangled.MM$mangled.A$mangled();
  return a$mangled === M$mangled.MM$mangled.v$mangled;
};
/**
 * @param {number} a$mangled
 * @returns {boolean}
 */
M$mangled.MM$mangled.A$mangled.d$mangled = function (a$mangled) {
  new M$mangled.MM$mangled.A$mangled();
  return a$mangled === M$mangled.MM$mangled.v$mangled;
};

/** @type {number} */ M$mangled.MM$mangled.A$mangled.b$mangled;

/** @type {number} */ M$mangled.MM$mangled.A$mangled.f$mangled = 0;

/**
 * @constructor
 * @struct
 * @extends {M$mangled.MM$mangled.A$mangled}
 * @implements {M$mangled.MM$mangled.I$mangled}
 */
M$mangled.MM$mangled.B$mangled = function () {
  M$mangled.MM$mangled.A$mangled.call(this);
  /** @type {?} */ var capture$mangled = /** @type {?} */ (M$mangled.MM$mangled.A$mangled.prototype);
};

__extends(M$mangled.MM$mangled.B$mangled, M$mangled.MM$mangled.A$mangled);

/**
 * @interface
 */
M$mangled.MM$mangled.I$mangled = function () {
};

/** @type {number} */ M$mangled.MM$mangled.I$mangled.prototype.a$mangled;
/**
 * @param {number} a$mangled
 * @returns {boolean}
 */
M$mangled.MM$mangled.I$mangled.prototype.c$mangled = function (a$mangled) {
};

/**
 * @param {number} index$mangled
 * @returns {string}
 */
M$mangled.MM$mangled.f$mangled = function (index$mangled) {
  /** @type {number} */ var x$mangled = index$mangled;
  /** @type {?{ foo$mangled: ?function(new:M$mangled.MM$mangled.I$mangled, number, number) }} */ var y$mangled = null;
  /** @type {?} */ var z$mangled = null;
  /** @type {?} */ var w$mangled = { 'foo bar': 0 };
  /** @type {?function(): ?} */ var functionExpression1$mangled = function foo$mangled() {
    return foo$mangled;
  };
  /** @type {?{ foo$mangled: ?function(): ? }} */ var functionExpression2$mangled = { foo$mangled: function bar$mangled() {
      return bar$mangled;
    } };
  return '';
};

/** @type {?function(): ?} */ M$mangled.MM$mangled.functionExpression1$mangled = function foo$mangled() {
  return foo$mangled;
};
/** @type {?{ foo$mangled: ?function(): ? }} */ M$mangled.MM$mangled.functionExpression2$mangled = { foo$mangled: function bar$mangled() {
    return bar$mangled;
  } };

M$mangled.MM$mangled.tryCatch1$mangled = function () {
  try  {
    /** @type {?} */ var foo$mangled;
    foo$mangled = 100;
    foo$mangled = '';
  } catch (e$mangled) {
    foo$mangled = e$mangled;
  }
};

M$mangled.MM$mangled.tryCatch2$mangled = function () {
  try  {
    try  {
      throw null;
    } catch (e$mangled) {
    }
    /** @type {?} */ var foo$mangled;
    foo$mangled = 100;
    foo$mangled = '';
  } catch (e$mangled) {
    foo$mangled = e$mangled;
  }
};

/**
 * @typedef {Object.<string, M$mangled.MM$mangled.A$mangled>}
 */
M$mangled.MM$mangled.IndexFoo$mangled;

/**
 * @typedef {(Object.<string, M$mangled.MM$mangled.A$mangled>|Object.<number, M$mangled.MM$mangled.B$mangled>)}
 */
M$mangled.MM$mangled.IndexFoo2$mangled;

/**
 * @typedef {?function(string): M$mangled.MM$mangled.A$mangled}
 */
M$mangled.MM$mangled.CallFoo$mangled;

/**
 * @typedef {(?function(string): M$mangled.MM$mangled.A$mangled|?function(number): M$mangled.MM$mangled.B$mangled)}
 */
M$mangled.MM$mangled.CallFoo2$mangled;

/**
 * @param {...number} foo$rest
 * @returns {number}
 */
M$mangled.MM$mangled.test1$mangled = function (foo$rest) {
  /** @type {Array.<number>} */ var foo$mangled = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    foo$mangled[_i] = arguments[_i];
  }
  return foo$mangled.length;
};

/**
 * @param {string} a$mangled
 * @param {string} b$mangled
 * @param {...number} foo$rest
 * @returns {number}
 */
M$mangled.MM$mangled.test2$mangled = function (a$mangled, b$mangled, foo$rest) {
  /** @type {Array.<number>} */ var foo$mangled = [];
  for (var _i = 0; _i < arguments.length - 2; _i++) {
    foo$mangled[_i] = arguments[_i + 2];
  }
  return foo$mangled.length;
};

/**
 * @param {boolean} a$mangled
 * @param {string=} b$mangled
 * @param {number=} c$mangled
 */
M$mangled.MM$mangled.test3$mangled = function (a$mangled, b$mangled, c$mangled) {
  if (typeof b$mangled === "undefined") b$mangled = '';
  if (typeof c$mangled === "undefined") c$mangled = 0;
};

/** @type {?function(...[?])} */ M$mangled.MM$mangled.test4$mangled = null;
/** @type {?function(...[number])} */ M$mangled.MM$mangled.test5$mangled = null;

/**
 * @param {number=} baz$mangled
 * @constructor
 * @struct
 */
M$mangled.MM$mangled.Test1$mangled = function (baz$mangled) {
  if (typeof baz$mangled === "undefined") baz$mangled = 3;
  /** @type {number} */ this.baz$mangled = baz$mangled;
  /** @type {number} */ this.foo$mangled = 1;
};

M$mangled.MM$mangled.Test1$mangled.prototype.f$mangled = function () {
  var _this = this;
  /** @type {?function(): number} */ var foo$mangled = function () {
    return _this.foo$mangled;
  };
};

/** @type {number} */ M$mangled.MM$mangled.Test1$mangled.bar$mangled = 2;

/**
 * @constructor
 * @struct
 * @extends {M$mangled.MM$mangled.Test1$mangled}
 */
M$mangled.MM$mangled.Test2$mangled = function () {
  M$mangled.MM$mangled.Test1$mangled.call(this);
};

__extends(M$mangled.MM$mangled.Test2$mangled, M$mangled.MM$mangled.Test1$mangled);

M$mangled.MM$mangled.Test2$mangled.prototype.f$mangled = function () {
  M$mangled.MM$mangled.Test1$mangled.prototype.f$mangled.call(this);
};
