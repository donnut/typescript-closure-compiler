for (var i = 0; i < 10; i++) {
}

var M = {};

/** @type {number} */ M.foo$mangled;
/** @type {?{ baz$mangled: number }} */ M.bar$mangled = { baz$mangled: 1 };

/**
 * @constructor
 * @struct
 */
M.Foo$mangled = function () {
  /** @type {number} */ this.foo$mangled;
};

/** @type {number} */ M.Foo$mangled.bar$mangled;

for (M.i$mangled = 0; M.i$mangled < 10; M.i$mangled++) {
}

var MM = {};

/** @type {number} */ MM.foo$mangled;

M.MM$mangled = {};

/** @type {number} */ M.MM$mangled.foo$mangled;

/** @type {number} */ M.MM$mangled.bar$mangled;
