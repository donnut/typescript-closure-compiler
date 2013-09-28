module M {
  var foo: number;
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
