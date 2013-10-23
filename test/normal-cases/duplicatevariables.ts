var foo1 = 0;
var foo1 = 0;

var foo2: number;
var foo2 = 0;

var foo3 = 0;
var foo3: number;

function f1() {
  var foo = 0;
  var foo = 0;
}

function f2() {
  var foo: number;
  var foo = 0;
}

function f3() {
  var foo = 0;
  var foo: number;
}

module M {
  var foo1 = 0;
  var foo1 = 0;
}

module M {
  var foo2: number;
  var foo2 = 0;
}

module M {
  var foo3 = 0;
  var foo3: number;
}

// Note: Both instance and static fields for classes are not tested here
// because they currently cause error TS2000: Duplicate identifier.
