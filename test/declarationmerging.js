/**
 * @constructor
 * @struct
 */
var Foo = function () {
};

/** @type {number} */ Foo.a = 0;
/** @type {number} */ Foo.b = 0;

var M = {};

/**
 * @constructor
 * @struct
 */
M.Foo = function () {
};

/** @type {number} */ M.Foo.a = 0;
/** @type {number} */ M.Foo.b = 0;

M.MM = {};

/**
 * @constructor
 * @struct
 */
M.MM.Foo = function () {
};

/** @type {number} */ M.MM.Foo.a = 0;
/** @type {number} */ M.MM.Foo.b = 0;

var MM = {};

MM.M = {};

/**
 * @constructor
 * @struct
 */
MM.M.Foo = function () {
};

/** @type {number} */ MM.M.Foo.a = 0;
/** @type {number} */ MM.M.Foo.b = 0;
