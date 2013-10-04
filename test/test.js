var fs = require('fs');
var path = require('path');
var assert = require('assert');
var child_process = require('child_process');
var tsc = path.resolve(__dirname, '../tscc');
var normalCases = path.resolve(__dirname, 'normal-cases');
var miniStandardLibrary = 'test.d.ts'; // Smaller standard library for speed

function compileTest(tsFiles, expectedFile, resultFile, customFlags, done) {
  var flags = tsFiles.concat('--out', resultFile, '--noLib', path.resolve(__dirname, miniStandardLibrary));
  var process = child_process.spawn(tsc, flags.concat(customFlags));
  var stderr = '';

  process.stderr.on('data', function(data) {
    stderr += data;
  });

  process.on('close', function(code) {
    assert.strictEqual(stderr, '');
    assert.strictEqual(code, 0);
    assert.strictEqual(fs.readFileSync(resultFile, 'utf8'), fs.readFileSync(expectedFile, 'utf8'));
    fs.unlinkSync(resultFile);
    done();
  });
}

////////////////////////////////////////////////////////////////////////////////
// Normal test cases
////////////////////////////////////////////////////////////////////////////////

fs.readdirSync(normalCases).sort().forEach(function(test) {
  if (!/\.ts$/.test(test) || test === miniStandardLibrary) {
    return;
  }

  var tsFile = path.resolve(normalCases, test);
  var jsFile = path.resolve(normalCases, test.replace(/\.ts$/, '.js'));
  var resultFile = path.resolve(normalCases, '.' + test.replace(/\.ts$/, '.js'));
  var mangledJsFile = path.resolve(normalCases, test.replace(/\.ts$/, '.mangled.js'));
  var mangledResultFile = path.resolve(normalCases, '.' + test.replace(/\.ts$/, '.mangled.js'));
  var customFlags = /^\/\/ compile with ([^\n]*)\n/.exec(fs.readFileSync(tsFile, 'utf8'));
  customFlags = customFlags ? customFlags[1].trim().split(/\s+/) : [];

  it(jsFile, function(done) {
    this.timeout(0);
    compileTest([tsFile], jsFile, resultFile, customFlags, done);
  });

  it(mangledJsFile, function(done) {
    this.timeout(0);
    compileTest([tsFile], mangledJsFile, mangledResultFile, customFlags.concat('--mangle'), done);
  });
});

////////////////////////////////////////////////////////////////////////////////
// Special test cases
////////////////////////////////////////////////////////////////////////////////

it('1.js', function(done) {
  compileTest(
    [path.resolve(__dirname, 'special-cases/1.a.ts'), path.resolve(__dirname, 'special-cases/1.b.ts')],
    path.resolve(__dirname, 'special-cases/1.js'),
    path.resolve(__dirname, 'special-cases/.1.js'),
    [], done);
});
