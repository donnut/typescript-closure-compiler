// compile with --const
class Foo {}

var a = null;
var b = false;
var c = true;
var d = 0;
var e = '';
var f = /./;

var g = new Foo();
var h = 0;
var i = 0;
h = 1;
i++;

module M {
  export var a = null;
  export var b = false;
  export var c = true;
  export var d = 0;
  export var e = '';
  export var f = /./;

  export var g = new Foo();
  export var h = 0;
  export var i = 0;
  export var j = 0;
  export var k = 0;
  h = 1;
  i++;
  M.j = 1;
  M.k++;
}

class C {
  A = null;
  B = false;
  C = true;
  D = 0;
  E = '';
  F = /./;
  G = new Foo();

  static a = null;
  static b = false;
  static c = true;
  static d = 0;
  static e = '';
  static f = /./;

  static g = new Foo();
  static h = 0;
  static i = 0;

  static foo() {
    C.h = 1;
    C.i++;
  }
}
