var fs = require('fs');
var path = require('path');
var assert = require('assert');
var child_process = require('child_process');
var tsc = path.resolve(__dirname, '../typescript-closure-compiler.js');

fs.readdirSync(__dirname).forEach(function(test) {
  if (!/\.ts$/.test(test)) {
    return;
  }

  it(test, function(done) {
    this.timeout(0);
    var process = child_process.spawn(tsc, [
      path.resolve(__dirname, test), '--out',
      path.resolve(__dirname, '.' + test.replace(/\.ts$/, '.js'))]);
    var stderr = '';
    process.stderr.on('data', function(data) {
      stderr += data;
    });
    process.on('close', function(code) {
      assert.strictEqual(stderr, '');
      assert.strictEqual(code, 0);
      done();
    });
  });
});
