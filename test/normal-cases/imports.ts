module A {
  export module B {
    export var foo = 0;
  }
}

module A {
  export module B {
    import foo = A.B.foo;
    var bar = foo;
  }
}

module A {
  export module C {
    export import baz = A.B.foo;
  }
}

module A {
  export module D {
    import foo = A.C.baz;
    var bar = foo;
  }
}
