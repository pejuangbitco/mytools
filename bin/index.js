#! /usr/bin/env node

const chalk = require('chalk')
const utils = require('./utils.js')
const usage = chalk.keyword('violet')("\nUsage: mytools <path_log_file> <options>");

const yargs = require("yargs");

const options = yargs
    .usage(usage)
    .option("o", { alias: "output", describe: "path output file", type: "path", demandOption: false })
    .option("t", { alias: "type", describe: "output file must be 'text' or 'json'", type: "string", demandOption: false })
    .help(true)
    .argv;

try {
    let type = null;
    let outputFile = null;
    if (yargs.argv._[0] == null) {
        utils.showHelp();
        return;
    }
    
    if (yargs.argv.t || yargs.argv.type) {
        let tmp = yargs.argv.t || yargs.argv.type;
        if (tmp == 'json' || tmp == 'text') {
            type = tmp;
        } else {
            throw "Output file type must be in 'json' or 'text'";
        }
    }

    if (yargs.argv.o || yargs.argv.output) {
        outputFile = yargs.argv.o || yargs.argv.output;
    }

    if (!yargs.argv._[0].startsWith('/var/log/')) {
        throw 'Incorrect path log file';
    }

    const sourcePath = yargs.argv._[0];
    let data = utils.getFile(sourcePath);    
    if (type === 'json') {
        data = utils.toJson(data);
    }
    
    utils.writeFile(sourcePath, data, outputFile, type);

} catch (error) {
    console.error(chalk.red.bold(`\n${error}\n`))
    console.log(chalk.green("Enter: mytools -h to get started.\n"))
}
