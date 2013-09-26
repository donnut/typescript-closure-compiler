var v = 0;
var v1 = false, v2 = 0;

class A {
  a: number;
  static b: number;
  c(a: number): boolean { return a === v; }
  static d(a: number): boolean { return a === v; }
  e = 0;
  static f = 0;
}

class B extends A implements I {
  constructor() {
    super();
    window['console'].log(super, this.c(<number>window['foo']));
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
  return '';
}

module M {
  var v = 0;
  var v1 = false, v2 = 0;

  class A {
    a: number;
    static b: number;
    c(a: number): boolean { return a === v; }
    static d(a: number): boolean { return a === v; }
    e = 0;
    static f = 0;
  }

  class B extends A implements I {
    constructor() {
      super();
      window['console'].log(super);
    }
  }

  interface I {
    a: number;
    c(a: number): boolean;
  }

  function f(index: number): string {
    var x = index;
    return '';
  }

  module MM {
    var v = 0;
    var v1 = false, v2 = 0;

    class A {
      a: number;
      static b: number;
      c(a: number): boolean { return a === v; }
      static d(a: number): boolean { return a === v; }
      e = 0;
      static f = 0;
    }

    class B extends A implements I {
      constructor() {
        super();
        window['console'].log(super);
      }
    }

    interface I {
      a: number;
      c(a: number): boolean;
    }

    function f(index: number): string {
      var x = index;
      return '';
    }
  }
}
