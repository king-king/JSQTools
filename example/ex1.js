var jslint = require('../JSLint/jslint');
var fs = require('fs');

var content = fs.readFileSync('../input/global1.js', 'utf-8');

// var content = fs.readFileSync('../input/target1.js', 'utf-8');

var result = jslint(content, {
    browser: true,
    single: true,
    white: true
}, ['require', 'G_STATIC_PATH', 'window', 'angular']);// 传入全局变量

fs.writeFileSync('../result/jslint_result.json', JSON.stringify(result.warnings), 'utf-8');