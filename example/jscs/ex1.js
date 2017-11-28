var Checker = require("jscs");
var fs = require('fs');

var checker = new Checker();
checker.configure({
    requireCamelCaseOrUpperCaseIdentifiers: true,
    disallowMultipleLineBreaks: true
});

var content = fs.readFileSync('../../input/target6.js', 'utf-8');

var results = checker.checkString(content);

results.getErrorList().forEach(function (error) {
    var colorizeOutput = true;
    console.log(results.explainError(error, colorizeOutput) + "\n");
});
