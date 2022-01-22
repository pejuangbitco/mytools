const chalk = require('chalk')
const usage = chalk.hex('#83aaff')("\nUsage: mytools <path_log_file> <options>");
const fs = require('fs');
module.exports = { getFile, writeFile, toJson, showHelp};

function getFile(path) {
    let data = fs.readFileSync(path, 'utf8');
    return data;
}

function writeFile(path, data, outputPathFile, type = 'text') {
    if(type == 'text') type = 'txt';
    type = '.'+type;

    //change file name extension to .txt
    if (outputPathFile === null) {
        let paths = path.split('/');
        let fileName = paths.pop();    
        outputPathFile = paths.join('/')+'/'+fileName.split('.')[0]+type;
    }
    //write file
    fs.writeFileSync(outputPathFile, data);
    console.log(chalk.green.bold(`Success get log file to ${outputPathFile}`));
}

function toJson(data) {
    array = data.split("\n")
    let dataArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] == '') { continue }
        let tempArray = {};
        tempArray['row'] = array[i];
        dataArray.push(tempArray)
    };

    return JSON.stringify(dataArray, null, 2);
}

function showHelp() {
    console.log(usage);
    console.log('\noptions:\r');
    console.log('-o | --output    ' + 'Set output file.' + '\t\t\t\t' + '[path]\n');
    console.log('-t | --type      ' + 'Set type of file output in json or text.' + '\t' + '[string]\n');
    console.log('-h | --help      ' + 'Show help.' + '\t\t\t\t\t' + '[boolean]\n');
}