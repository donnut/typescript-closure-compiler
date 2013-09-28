TypeScript.ModuleDeclaration.prototype.shouldEmit = function() {
  return true;
};

TypeScript.InterfaceDeclaration.prototype.shouldEmit = function() {
  return true;
};

TypeScript.InterfaceDeclaration.prototype.emit = function(emitter) {
  emitter.recordSourceMappingStart(this);
  emitter.emitInterfaceDeclaration(this);
  emitter.recordSourceMappingEnd(this);
};

TypeScript.UnaryExpression.prototype.emitWorker = function(emitWorker) {
  return function(emitter) { emitter.emitUnaryExpression(this, emitWorker); };
}(TypeScript.UnaryExpression.prototype.emitWorker);

TypeScript.VariableStatement.prototype.emitWorker = function(emitter) {
  emitter.emitVariableStatement(this);
};

TypeScript.ForStatement.prototype.emitWorker = function(emitter) {
  emitter.emitForStatement(this);
};

TypeScript.ForInStatement.prototype.emitWorker = function(emitter) {
  emitter.emitForInStatement(this);
};

TypeScript.Indenter.indentStepString = '  ';
TypeScript.Indenter.indentStep = 2;
