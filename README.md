# TypeScript Closure Compiler

This patches the TypeScript 0.9.1-1 compiler to generate JSDoc annotations ready for Google Closure Compiler. A demo is available online at [http://evanw.github.io/typescript-closure-compiler/](http://evanw.github.io/typescript-closure-compiler/).

## Usage

The patched version of the TypeScript compiler is available as `tscc` after installing globally with `npm install -g typescript-closure-compiler`. Substitute `tsc` with `tscc` in your build script. Note that the `--module` flag is not supported since the intent is to compile and optimize all code into one big bundle.

The patched compiler provides two additional flags that help generate special JSDoc annotations. Compile-time defines can be explicitly set with the `--define` flag:

    $ echo "var foo = 1;" > example.ts
    $ tscc example.ts
    $ cat example.js
    /** @type {number} */ var foo = 1;
    $ tscc example.ts --define foo
    $ cat example.js
    /** @define {number} */ var foo = 1;

Constant annotations are automatically added with the `--const` flag. The constant detection pass only annotates non-instance variables with primitive types that are initialized and then never modified.

    $ echo "var foo = 1;" > example.ts
    $ tscc example.ts
    $ cat example.js
    /** @type {number} */ var foo = 1;
    $ tscc example.ts --const
    $ cat example.js
    /** @const {number} */ var foo = 1;

## License

Like the TypeScript compiler itself, this code is licensed under the [Apache License 2.0](http://typescript.codeplex.com/license).
