var A = {};

A.B$mangled = {};

/** @type {number} */ A.B$mangled.foo$mangled = 0;


/** @type {number} */ A.B$mangled.bar$mangled = A.B$mangled.foo$mangled;

A.C$mangled = {};



A.D$mangled = {};


/** @type {number} */ A.D$mangled.bar$mangled = A.B$mangled.foo$mangled;
