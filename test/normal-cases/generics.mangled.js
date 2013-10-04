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
 * @constructor
 * @struct
 * @implements {IFoo}
 */
var Foo = function () {
};

/**
 * @param {?} a
 * @param {?} b
 * @returns {boolean}
 */
Foo.prototype.foo$mangled = function (a, b) {
  return false;
};

/**
 * @constructor
 * @struct
 * @extends {Foo}
 */
var Bar = function () {
  Foo.apply(this, arguments);
};

__extends(Bar, Foo);

/**
 * @param {?} a
 * @param {?} b
 * @returns {boolean}
 */
Bar.prototype.bar$mangled = function (a, b) {
  return false;
};

/**
 * @interface
 */
var IFoo = function () {
};

/**
 * @param {?} a
 * @param {?} b
 * @returns {boolean}
 */
IFoo.prototype.foo$mangled = function (a, b) {
};

/**
 * @interface
 * @extends {IFoo}
 */
var IBar = function () {
};

/**
 * @param {?} a
 * @param {?} b
 * @returns {boolean}
 */
IBar.prototype.bar$mangled = function (a, b) {
};

/**
 * @param {?} a
 * @param {?} b
 * @param {Foo} foo
 * @param {IFoo} ifoo
 * @returns {boolean}
 */
var foo = function (a, b, foo, ifoo) {
  return false;
};

/**
 * @typedef {Object.<string, ?>}
 */
var IndexFoo;

/**
 * @typedef {?function(string): ?}
 */
var CallFoo;
