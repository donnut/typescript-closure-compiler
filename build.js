var fs = require('fs');
var path = require('path');
var typescript = require.resolve('typescript');
var code = '';

code += fs.readFileSync(typescript, 'utf8');
code += fs.readFileSync(path.join(__dirname, 'emitter.js'), 'utf8');
code += fs.readFileSync(path.join(__dirname, 'patches.js'), 'utf8');
code += 'lib_d_ts = ' + JSON.stringify(fs.readFileSync(path.join(path.dirname(typescript), 'lib.d.ts'), 'utf8')) + ';';

function compile(source) {
  function processDiagnostics(diagnostics) {
    return diagnostics.map(function(diagnostic) {
      var line = null;
      var column = null;

      // Find the location in the source
      if (diagnostic.fileName()) {
        var snapshot = sources[diagnostic.fileName()];
        var lineMap = new TypeScript.LineMap(snapshot.getLineStartPositions(), snapshot.getLength());
        var lineCol = { line: -1, character: -1 };
        lineMap.fillLineAndCharacterFromPosition(diagnostic.start(), lineCol);
        line = lineCol.line + 1;
        column = lineCol.character + 1;
      }

      return { line: line, column: column, file: diagnostic.fileName(), message: diagnostic.message() };
    });
  }

  var sources = {
    'input.ts': TypeScript.ScriptSnapshot.fromString(source),
    'lib.d.ts': TypeScript.ScriptSnapshot.fromString(lib_d_ts)
  };

  // Parse the sources
  var compiler = new TypeScript.TypeScriptCompiler();
  for (var fileName in sources) {
    compiler.addSourceUnit(fileName, sources[fileName], ByteOrderMark.None, 0, false);
  }

  // Check for syntax errors
  var syntacticDiagnostics = [];
  for (var fileName in sources) {
    syntacticDiagnostics.push.apply(syntacticDiagnostics, compiler.getSyntacticDiagnostics(fileName));
  }
  if (syntacticDiagnostics.length > 0) {
    return { result: null, diagnostics: processDiagnostics(syntacticDiagnostics) };
  }

  // Check for type errors
  compiler.pullTypeCheck();
  var semanticDiagnostics = [];
  for (var fileName in sources) {
    semanticDiagnostics.push.apply(semanticDiagnostics, compiler.getSemanticDiagnostics(fileName));
  }
  if (semanticDiagnostics.length > 0) {
    return { result: null, diagnostics: processDiagnostics(semanticDiagnostics) };
  }

  // Fake an IO host
  var data = null;
  var IO = {
    writeFile: function(path, contents, writeByteOrderMark) { data = contents; },
    fileExists: function(path) { return false; },
    directoryExists: function(path) { return true; },
    resolvePath: function(path) { return path; }
  };

  // Try to emit code
  var emitDiagnostics = compiler.emitAll(IO);
  if (emitDiagnostics.length > 0) {
    return { result: null, diagnostics: processDiagnostics(emitDiagnostics) };
  }

  // Success!
  return { result: data, diagnostics: null };
}

console.log('function compileTypeScript(source) { ' + code + compile + ' return compile(source); }');
