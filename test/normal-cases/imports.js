var A = {};

A.B = {};

/** @type {number} */ A.B.foo = 0;


/** @type {number} */ A.B.bar = A.B.foo;

A.C = {};



A.D = {};


/** @type {number} */ A.D.bar = A.B.foo;
