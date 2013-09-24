class Foo<A, B extends Foo<A, B>> implements IFoo<A, B> {
  foo(a: A, b: B): boolean {
    return false;
  }
}

class Bar<A, B extends Foo<A, B>> extends Foo<A, B> {
  bar(a: A, b: B): boolean {
    return false;
  }
}

interface IFoo<A, B extends IFoo<A, B>> {
  foo(a: A, b: B): boolean;
}

interface IBar<A, B extends IFoo<A, B>> extends IFoo<A, B> {
  bar(a: A, b: B): boolean;
}

function foo<A, B extends IFoo<A, B>>(a: A, b: B, foo: Foo<A, B>, ifoo: IFoo<A, B>): boolean {
  return false;
}
