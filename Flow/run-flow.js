const execFile = require('child_process').execFile;
const flow = require('flow-bin');
const fs = require('fs');

execFile(flow, ['check', '--show-all-errors'], (err, stdout) => {
    console.log(typeof stdout)
    console.log('over');
    fs.writeFileSync('./result.log', stdout, 'utf-8');
});