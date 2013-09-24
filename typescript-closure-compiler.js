#!/usr/bin/env node

var TSC = './node_modules/typescript/bin/tsc.js';

eval(require('fs')
  .readFileSync(TSC, 'utf8')
  .replace(/batch\.batchCompile\(\);\s*$/, '')
  .replace(/\btsc\b/g, 'tscc'));

eval(require('fs')
  .readFileSync('./emitter.js', 'utf8'));

TypeScript.InterfaceDeclaration.prototype.shouldEmit = function() {
  return true;
};

TypeScript.InterfaceDeclaration.prototype.emit = function(emitter) {
  emitter.recordSourceMappingStart(this);
  emitter.emitInterfaceDeclaration(this);
  emitter.recordSourceMappingEnd(this);
};

TypeScript.UnaryExpression.prototype.emitWorker = function(emitWorker) {
  return function(emitter) {
    if (this.nodeType() === TypeScript.NodeType.CastExpression) {
      emitter.emitInlineTypeComment(this.symbol.type);
      emitter.writeToOutput('(');
      this.operand.emit(emitter);
      emitter.writeToOutput(')');
    } else {
      emitWorker.call(this, emitter);
    }
  };
}(TypeScript.UnaryExpression.prototype.emitWorker);

TypeScript.VariableStatement.prototype.emitWorker = function(emitter) {
  if (TypeScript.hasFlag(this.getFlags(), TypeScript.ASTFlags.EnumElement)) {
    emitter.emitEnumElement(this.declaration.declarators.members[0]);
  } else {
    this.declaration.emit(emitter);
  }
};

process.mainModule.filename = require('path').resolve(TSC);
TypeScript.Indenter.indentStepString = '  ';
TypeScript.Indenter.indentStep = 2;
batch.batchCompile();
