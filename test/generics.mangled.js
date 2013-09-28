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
 * @constructor
 * @struct
 * @implements {IFoo$mangled}
 */
var Foo$mangled = function () {
};

/**
 * @param {?} a$mangled
 * @param {?} b$mangled
 * @returns {boolean}
 */
Foo$mangled.prototype.foo$mangled = function (a$mangled, b$mangled) {
  return false;
};

/**
 * @constructor
 * @struct
 * @extends {Foo$mangled}
 */
var Bar$mangled = function () {
  Foo$mangled.apply(this, arguments);
};

__extends(Bar$mangled, Foo$mangled);

/**
 * @param {?} a$mangled
 * @param {?} b$mangled
 * @returns {boolean}
 */
Bar$mangled.prototype.bar$mangled = function (a$mangled, b$mangled) {
  return false;
};

/**
 * @interface
 */
var IFoo$mangled = function () {
};

/**
 * @param {?} a$mangled
 * @param {?} b$mangled
 * @returns {boolean}
 */
IFoo$mangled.prototype.foo$mangled = function (a$mangled, b$mangled) {
};

/**
 * @interface
 * @extends {IFoo$mangled}
 */
var IBar$mangled = function () {
};

/**
 * @param {?} a$mangled
 * @param {?} b$mangled
 * @returns {boolean}
 */
IBar$mangled.prototype.bar$mangled = function (a$mangled, b$mangled) {
};

/**
 * @param {?} a$mangled
 * @param {?} b$mangled
 * @param {Foo$mangled} foo$mangled
 * @param {IFoo$mangled} ifoo$mangled
 * @returns {boolean}
 */
var foo$mangled = function (a$mangled, b$mangled, foo$mangled, ifoo$mangled) {
  return false;
};

/**
 * @typedef {Object.<string, ?>}
 */
var IndexFoo$mangled;

/**
 * @typedef {?function(string): ?}
 */
var CallFoo$mangled;
