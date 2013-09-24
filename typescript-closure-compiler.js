#!/usr/bin/env node

var TSC = './node_modules/typescript/bin/tsc.js';

eval(require('fs')
  .readFileSync(TSC, 'utf8')
  .replace(/batch\.batchCompile\(\);\s*$/, '')
  .replace(/\btsc\b/g, 'tscc'));

eval(require('fs')
  .readFileSync('./emitter.js', 'utf8'));

process.mainModule.filename = require('path').resolve(TSC);
TypeScript.Indenter.indentStepString = '  ';
TypeScript.Indenter.indentStep = 2;
batch.batchCompile();
