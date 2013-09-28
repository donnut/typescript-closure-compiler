module M {
  var foo: number;
  var bar = { baz: 1 };

  class Foo {
    foo: number;
    static bar: number;
  }
}

module MM {
  var foo: number;
}

module M {
  module MM {
    var foo: number;
  }
}

module M {
  module MM {
    var bar: number;
  }
}

module Empty {
}

module NotEmpty {
  interface Foo {}
}
