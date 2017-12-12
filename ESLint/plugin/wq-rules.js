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
            },
            Program: function (node) {
                var scope = context.getScope();
                scope.variables.forEach(function (va) {
                    console.log(va.name);
                });
                fs.writeFileSync('./result.json', JSON.stringify(result), 'utf-8')
            }
        }
    }
}