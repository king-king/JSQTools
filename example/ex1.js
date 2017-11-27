var jslint = require('../JSLint/jslint');
var fs = require('fs');

var content = fs.readFileSync('../input/global1.js', 'utf-8');

var result = jslint(content, {
    // node: true,
    browser: true, // 可以使用浏览器端的全局变量
    single: true,
    white: true
});

fs.writeFileSync('../result/jslint_result.json', JSON.stringify(result.warnings), 'utf-8');