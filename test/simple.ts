var empty = {};

enum Foo { ABC, XYZ = 100 }

var v = 0;
var v1 = false, v2 = 0;

class A {
  a: number;
  static b: number;
  c(a: number): boolean { new A(); return a === v; }
  static d(a: number): boolean { new A(); return a === v; }
  e = 0;
  static f = 0;
}

class B extends A implements I {
  constructor() {
    super();
    var capture = <any>super;
  }
}

interface I {
  a: number;
  c(a: number): boolean;
}

function f(index: number): string {
  var a;
  var b = void 0;
  var c = 0;
  var d = '';
  var e = false;
  var f = [];
  var g = [''];
  var h = [['']];
  var i = () => 0;
  var j = { 0: 'a' };
  var k = { a: 0 };
  var l: { [index: number]: string } = { 0: 'a' };
  var m: { [index: string]: number } = { a: 0 };
  var n = { 'a': 0 };
  return '';
}

module M {
  enum Foo { ABC, XYZ = 100 }

  var v = 0;
  var v1 = false, v2 = 0;

  class A {
    a: number;
    static b: number;
    c(a: number): boolean { new A(); return a === v; }
    static d(a: number): boolean { new A(); return a === v; }
    e = 0;
    static f = 0;
  }

  class B extends A implements I {
    constructor() {
      super();
      var capture = <any>super;
    }
  }

  interface I {
    a: number;
    c(a: number): boolean;
  }

  function f(index: number): string {
    function g() {
      var h = 0;
    }
    var x = index;
    return '';
  }

  module MM {
    enum Foo { ABC, XYZ = 100 }

    var v = 0;
    var v1 = false, v2 = 0;

    class A {
      a: number;
      static b: number;
      c(a: number): boolean { new A(); return a === v; }
      static d(a: number): boolean { new A(); return a === v; }
      e = 0;
      static f = 0;
    }

    class B extends A implements I {
      constructor() {
        super();
        var capture = <any>super;
      }
    }

    interface I {
      a: number;
      c(a: number): boolean;
    }

    function f(index: number): string {
      var x = index;
      var y: { foo: new(a: number, b: number) => I } = null;
      var z: { 'foo bar': number } = null, w = { 'foo bar': 0 }; // Google Closure Compiler's type parser cannot quote names
      var functionExpression1 = function foo() { return foo; };
      var functionExpression2 = { foo: function bar() { return bar; } };
      return '';
    }

    var functionExpression1 = function foo() { return foo; };
    var functionExpression2 = { foo: function bar() { return bar; } };

    function tryCatch1() {
      try {
        var foo: any;
        foo = 100;
        foo = '';
      } catch (e) {
        foo = e;
      }
    }

    function tryCatch2() {
      try {
        try { throw null; } catch (e) {}
        var foo: any;
        foo = 100;
        foo = '';
      } catch (e) {
        foo = e;
      }
    }

    interface IndexFoo {
      [name: string]: A;
    }

    interface IndexFoo2 {
      [name: string]: A;
      [name: number]: B;
    }

    interface CallFoo {
      (name: string): A;
    }

    interface CallFoo2 {
      (name: string): A;
      (name: number): B;
    }

    function test1(...foo: number[]): number {
      return foo.length;
    }

    function test2(a: string, b: string, ...foo: number[]): number {
      return foo.length;
    }

    function test3(a: boolean, b = '', c = 0) {
    }

    var test4: (...foo) => void = null;
    var test5: (...foo: number[]) => void = null;

    class Test1 {
      foo = 1;
      static bar = 2;
      constructor(public baz = 3) {}
      f() {
        var foo = () => this.foo;
      }
    }

    class Test2 extends Test1 {
      constructor() { super(); }
      f() { super.f(); }
    }
  }
}
