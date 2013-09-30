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

Mustache.to_html('<div>{{name}}</div>', { 'name': 'foo' });
Foo.bar();
new Foo(1).foo;
new Foo(2).baz();

M.Mustache.to_html('<div>{{name}}</div>', { 'name': 'foo' });
M.Foo.bar();
new M.Foo(1).foo;
new M.Foo(2).baz();

/**
 * @constructor
 * @struct
 * @extends {Foo}
 */
var Bar = function () {
  Foo.apply(this, arguments);
};

__extends(Bar, Foo);

Bar.prototype.baz = function () {
  Foo.prototype.baz.call(this);
};
/**
 * @returns {string}
 */
Bar.prototype.toString = function () {
  return '';
};
new Bar(3).baz();

/**
 * @constructor
 * @struct
 */
var Baz = function () {
};

/**
 * @returns {string}
 */
Baz.prototype.toString = function () {
  return '';
};

new Baz().toString();

/** @type {?} */ var x;
x.foo().bar();
