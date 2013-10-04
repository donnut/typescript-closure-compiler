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
 * Note: This currently doesn't work because the TypeScript compiler itself
 * doesn't work correctly here (it doesn't even record the "declare" keyword).
 * See also: https://typescript.codeplex.com/workitem/1699
 *
 * @enum {number}
 */
var E = {
  X$mangled: 0,
  Y$mangled: 1,
  Z$mangled: 2
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
