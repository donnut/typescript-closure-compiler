for (var i = 0; i < 10; i++) {}

module M {
  var foo: number;
  var bar = { baz: 1 };

  class Foo {
    foo: number;
    static bar: number;
  }

  for (var i = 0; i < 10; i++) {}
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
