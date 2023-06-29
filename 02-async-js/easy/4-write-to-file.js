const fs = require('fs');

var dataToWrite = "Writing to a file!";

function writeToFile(err){
    if(err){
        console.error("Encountered error ", err);
        return;
    }
    console.log("File has been written");
}

fs.writeFile('writeToFile.txt', dataToWrite, 'utf-8', writeToFile);