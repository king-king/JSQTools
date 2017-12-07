const fs = require('fs');
const fp = require('flow-parser');

let content = fs.readFileSync('./input.js', 'utf-8');

let result = fp.parse('1+1', {
    esproposal_decorators: true,
    esproposal_class_instance_fields: true,
    esproposal_class_static_fields: true,
    esproposal_export_star_as: true,
    types: true
});
fs.writeFileSync('./result.json', JSON.stringify(result.errors), 'utf-8');