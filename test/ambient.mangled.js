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
var Bar$mangled = function () {
  Foo.apply(this, arguments);
};

__extends(Bar$mangled, Foo);

Bar$mangled.prototype.baz = function () {
  Foo.prototype.baz.call(this);
};
new Bar$mangled(3).baz();
