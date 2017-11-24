var jslint = require('../JSLint/jslint');
var fs = require('fs');

var content = fs.readFileSync('../input/target1.js', 'utf-8');

var result = jslint(content, {
    // node: true,
    // single: false
});

fs.writeFileSync('../result/jslint_result.json', JSON.stringify(result.warnings), 'utf-8');