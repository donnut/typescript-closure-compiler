/**
 * @constructor
 * @struct
 */
var Foo = function () {
};

/** @type {number} */ Foo.a$mangled = 0;
/** @type {number} */ Foo.b$mangled = 0;

var M = {};

/**
 * @constructor
 * @struct
 */
M.Foo$mangled = function () {
};

/** @type {number} */ M.Foo$mangled.a$mangled = 0;
/** @type {number} */ M.Foo$mangled.b$mangled = 0;

M.MM$mangled = {};

/**
 * @constructor
 * @struct
 */
M.MM$mangled.Foo$mangled = function () {
};

/** @type {number} */ M.MM$mangled.Foo$mangled.a$mangled = 0;
/** @type {number} */ M.MM$mangled.Foo$mangled.b$mangled = 0;

var MM = {};

MM.M$mangled = {};

/**
 * @constructor
 * @struct
 */
MM.M$mangled.Foo$mangled = function () {
};

/** @type {number} */ MM.M$mangled.Foo$mangled.a$mangled = 0;
/** @type {number} */ MM.M$mangled.Foo$mangled.b$mangled = 0;
