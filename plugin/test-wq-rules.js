'use strict'
var RuleTester = require('eslint').RuleTester
var rule = require('./wq-rules');
var fs = require('fs');
var parserOptions = {
    ecmaVersion: 6,
    sourceType: 'module'
}

var ruleTester = new RuleTester()
ruleTester.run('wq-riles', rule, {
    valid: [{
        code: fs.readFileSync('./input.js', 'utf-8'),
        options: ['either']
    }],
    invalid: [{
        code: 'var [ x] = y',
        options: ['either'],
        parserOptions: parserOptions,
        errors: [{
            message: 'Expected consistent spacing',
            type: 'ArrayPattern',
            line: 1,
            column: 5
        }]
    }]
})