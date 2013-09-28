declare var Mustache: { to_html: (template: string, object: any) => string };

declare class Foo {
  foo: number;
  constructor(foo: number);
  static bar();
  baz();
}

Mustache.to_html('<div>{{name}}</div>', { 'name': 'foo' });
Foo.bar();
new Foo(1).foo;
new Foo(2).baz();

declare module M {
  var Mustache: { to_html: (template: string, object: any) => string };

  class Foo {
    foo: number;
    constructor(foo: number);
    static bar();
    baz();
  }
}

M.Mustache.to_html('<div>{{name}}</div>', { 'name': 'foo' });
M.Foo.bar();
new M.Foo(1).foo;
new M.Foo(2).baz();
