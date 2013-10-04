class Foo { static a: number = 0; }
module Foo { export var b: number = 0; }

module M {
  class Foo { static a: number = 0; }
  module Foo { export var b: number = 0; }
}

module M.MM {
  class Foo { static a: number = 0; }
  module Foo { export var b: number = 0; }
}

module MM.M {
  class Foo { static a: number = 0; }
  module Foo { export var b: number = 0; }
}
