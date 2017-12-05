'use strict'
var fs = require('fs');
var num = 0;
var result = [];
module.exports = {
    meta: {
        docs: {}
    },

    create: function (context) {
        return {
            ArrayPattern: function (node) {
                context.report({
                    node: node,
                    message: 'Expected consistent spacing'
                });
                // context.report(node, 'Expected consistent spacing')
                // console.log(JSON.stringify(context.getTokens(node)));
                // fs.writeFileSync('./result.json', JSON.stringify(context.getTokens(node)), 'utf-8')
                // console.log(context.getTokens());
            },
            ArrayExpression: function (node) {
                // console.log(++num);
                var sourceCode = context.getSourceCode();
                // console.log(sourceCode.getText(node));
                result.push(context.getTokens(node));
                fs.writeFileSync('./result.json', JSON.stringify(result), 'utf-8')
            },
            CatchClause: function (node) {
                // var sourceCode = context.getSourceCode();
                // console.log(sourceCode.getText(node));
            },
            IfStatement: function (node) {
                var sourceCode = context.getSourceCode();
                console.log(sourceCode.getText(node));
                console.log(sourceCode.getFirstToken(node));
                console.log(sourceCode.getLastToken(node));
            },
            XMLEscape: function (node) {
                // var sourceCode = context.getSourceCode();
                // console.log(sourceCode.getText(node));
            }
        }
    }
}