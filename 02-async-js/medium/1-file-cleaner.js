const fs = require('fs');

function writeToFile(err){
    if(err){
        console.error("Encountered error ", err);
        return;
    }
    console.log("File has been written");
}

function readFileAndUpdateData(err, data){
    if(err){
        console.error("Encountered error ", err);
        return;
    }
    var updatedData = data.replace(/\s+/g,' ').trim()
    fs.writeFile('readFromFileAndUpdateIt.txt', updatedData, 'utf-8', writeToFile);
}

fs.readFile('readFromFileAndUpdateIt.txt', 'utf8', readFileAndUpdateData);

