var eslint = require('eslint');
var fs = require('fs');
var espree = require('espree');

var content = fs.readFileSync('../../input/target6.js', 'utf-8');

var ast = espree.parse(content, {
    range: true,
    loc: true,
    tokens: true,
    comment: true
});
var SourceCode = eslint.SourceCode;
var code = new SourceCode(content, ast);

fs.writeFileSync('./eslint_result.json', JSON.stringify(code), 'utf-8');

console.log(code);