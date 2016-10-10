"use strict";
var exec = require('child_process').exec;
var target = require('./target');
const path = require('path');

(function() {
    var childProcess = require("child_process");
    var oldSpawn = childProcess.spawn;
    function mySpawn() {
        console.log('spawn called');
        console.log(arguments);
        var result = oldSpawn.apply(this, arguments);
        return result;
    }
    childProcess.spawn = mySpawn;
})();

target.init();

var argv = process.argv.splice(2).join(' ');
// path.join(target.path, name)

module.exports = function(name) {
  exec(path.join(target.path, name + ` ${argv}`), function(err, out) {
    console.log(out.toString());
  })
};
