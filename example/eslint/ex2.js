var Linter = require("eslint").Linter;
var linter = new Linter();

var messages = linter.verify("var foo = new Object();", {
    rules: {
        "no-new-object": 2
    }
});
console.log(messages);



// or using SourceCode

// var linter = require("eslint").linter,
//     SourceCode = require("eslint").SourceCode,
//     espree = require('espree');

// var ast = espree.parse("var foo = new Object();", {
//     range: true,
//     loc: true,
//     tokens: true,
//     comment: true
// });
// var code = new SourceCode("var foo = new Object();", ast);

// var messages = linter.verify(code, {
//     rules: {
//         "no-new-object": 2
//     }
// });
// console.log(messages);