var fs = require('fs');
var path = require('path');
var assert = require('assert');
var child_process = require('child_process');
var tsc = path.resolve(__dirname, '../tscc');

fs.readdirSync(__dirname).sort().forEach(function(test) {
  if (!/\.ts$/.test(test)) {
    return;
  }

  it(test, function(done) {
    this.timeout(0);
    var tsFile = path.resolve(__dirname, test);
    var txtFile = path.resolve(__dirname, test.replace(/\.ts$/, '.txt'));
    var jsFile = path.resolve(__dirname, '.' + test.replace(/\.ts$/, '.js'));
    var flags = [tsFile, '--out', jsFile];
    var customFlags = /^\/\/ compile with ([^\n]*)\n/.exec(fs.readFileSync(tsFile, 'utf8'));
    if (customFlags !== null) flags = flags.concat(customFlags[1].trim().split(/\s+/));
    var process = child_process.spawn(tsc, flags);
    var stderr = '';
    process.stderr.on('data', function(data) {
      stderr += data;
    });
    process.on('close', function(code) {
      assert.strictEqual(stderr, '');
      assert.strictEqual(code, 0);
      assert.strictEqual(fs.readFileSync(jsFile, 'utf8'), fs.readFileSync(txtFile, 'utf8'));
      fs.unlinkSync(jsFile);
      done();
    });
  });
});
