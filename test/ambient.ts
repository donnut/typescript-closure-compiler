declare var Mustache: { to_html: (template: string, object: any) => string };

// Note: This currently doesn't work because the TypeScript compiler itself
// doesn't work correctly here (it doesn't even record the "declare" keyword).
// See also: https://typescript.codeplex.com/workitem/1699
declare enum E { X, Y, Z }

declare class Foo {
  foo: number;
  constructor(foo: number);
  static bar();
  baz();
  toString(): string;
}

Mustache.to_html('<div>{{name}}</div>', { 'name': 'foo' });
Foo.bar();
new Foo(1).foo;
new Foo(2).baz();

declare module M {
  var Mustache: { to_html: (template: string, object: any) => string };
  enum E { X, Y, Z }

  class Foo {
    foo: number;
    constructor(foo: number);
    static bar();
    baz();
    toString(): string;
  }
}

M.Mustache.to_html('<div>{{name}}</div>', { 'name': 'foo' });
M.Foo.bar();
new M.Foo(1).foo;
new M.Foo(2).baz();

class Bar extends Foo {
  baz() { super.baz(); }
  toString() { return ''; }
}
new Bar(3).baz();

class Baz {
  toString() { return ''; }
}

new Baz().toString();

var x: any;
x.foo().bar();
