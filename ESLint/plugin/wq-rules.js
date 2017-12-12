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
                fs.writeFileSync('./result.json', JSON.stringify(result), 'utf-8')

                var variables = scope.variables;
                variables.forEach(function (variable, i) {
                    // console.log('variable:' + variable.name);
                    var references = variable.references;
                    references.forEach(function (ref) {
                        let target = ref.identifier.parent;
                        console.log('variable ' + i + ' : ' + variable.name);
                        console.log('type : ' + target.type);
                    });
                });

            },
            "Program:exit": function () {
                // var scope = context.getScope();
                // var variables = scope.variables;
                // variables.forEach(function (variable, i) {
                //     // console.log('variable:' + variable.name);
                //     var references = variable.references;
                //     references.forEach(function (ref) {
                //         let target = ref.identifier.parent;
                //         console.log('variable ' + i + ' : ' + variable.name);
                //         console.log('type : ' + target.type);
                //     });
                // });
            }
        }
    }
}