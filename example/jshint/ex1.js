var jshint = require('jshint').JSHINT;
var fs = require('fs');
var content = fs.readFileSync('../../input/target4.js', 'utf-8');

jshint(content, {
    undef: true,
    esversion: 6
});

fs.writeFileSync('./jshint_result.json', JSON.stringify(jshint.data()), 'utf-8');