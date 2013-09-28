var fs = require('fs');
var path = require('path');
var assert = require('assert');
var child_process = require('child_process');
var tsc = path.resolve(__dirname, '../tscc');
var miniStandardLibrary = 'test.d.ts'; // Smaller standard library for speed

function compileTest(tsFile, expectedFile, resultFile, customFlags, done) {
  var flags = [tsFile, '--out', resultFile, '--noLib', path.resolve(__dirname, miniStandardLibrary)];
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

fs.readdirSync(__dirname).sort().forEach(function(test) {
  if (!/\.ts$/.test(test) || test === miniStandardLibrary) {
    return;
  }

  var tsFile = path.resolve(__dirname, test);
  var jsFile = path.resolve(__dirname, test.replace(/\.ts$/, '.js'));
  var resultFile = path.resolve(__dirname, '.' + test.replace(/\.ts$/, '.js'));
  var mangledJsFile = path.resolve(__dirname, test.replace(/\.ts$/, '.mangled.js'));
  var mangledResultFile = path.resolve(__dirname, '.' + test.replace(/\.ts$/, '.mangled.js'));
  var customFlags = /^\/\/ compile with ([^\n]*)\n/.exec(fs.readFileSync(tsFile, 'utf8'));
  customFlags = customFlags ? customFlags[1].trim().split(/\s+/) : [];

  it(jsFile, function(done) {
    this.timeout(0);
    compileTest(tsFile, jsFile, resultFile, customFlags, done);
  });

  it(mangledJsFile, function(done) {
    this.timeout(0);
    compileTest(tsFile, mangledJsFile, mangledResultFile, customFlags.concat('--mangle'), done);
  });
});
