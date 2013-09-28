for (var i = 0; i < 10; i++) {
}

var M = {};

/** @type {number} */ M.foo;
/** @type {?{ baz: number }} */ M.bar = { baz: 1 };

/**
 * @constructor
 * @struct
 */
M.Foo = function () {
  /** @type {number} */ this.foo;
};

/** @type {number} */ M.Foo.bar;

for (M.i = 0; M.i < 10; M.i++) {
}

var MM = {};

/** @type {number} */ MM.foo;

M.MM = {};

/** @type {number} */ M.MM.foo;

/** @type {number} */ M.MM.bar;
