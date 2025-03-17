const fs = require("fs");
const { Command } = require('commander');
const program = new Command();

program
    .name('counter')
    .description('CLI to do file based tasks')
    .version('1.0.0');

program.command('words')
    .description('Count the number of words in a file')
    .argument('<file>', 'file to count')
    .action((file) => {
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) {
              console.log(err);
            } else {
              const words = data.split(' ').length;
              console.log(`There are ${words} words in ${file}`);
            }
        });
    });


program.command('sentences')
    .description('Count the number of words in a file')
    .argument('<file>', 'file to count')
    .action((file) => {
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) {
              console.log(err);
            } else {
              const lines = data.split('\n').length;
              console.log(`There are ${lines} lines in ${file}`);
            }
        });
    });

program.parse();
