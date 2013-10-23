/** @type {number} */ var foo1 = 0;
foo1 = 0;

/** @type {number} */ var foo2;
foo2 = 0;

/** @type {number} */ var foo3 = 0;


var f1 = function () {
  /** @type {number} */ var foo = 0;
  foo = 0;
};

var f2 = function () {
  /** @type {number} */ var foo;
  foo = 0;
};

var f3 = function () {
  /** @type {number} */ var foo = 0;
  
};

var M = {};

/** @type {number} */ M.foo1$mangled = 0;
M.foo1$mangled = 0;

/** @type {number} */ M.foo2$mangled;
M.foo2$mangled = 0;

/** @type {number} */ M.foo3$mangled = 0;

