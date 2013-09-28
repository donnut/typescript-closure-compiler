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
