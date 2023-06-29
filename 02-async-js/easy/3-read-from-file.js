const fs = require('fs');

function printFile(err, data){
    if(err){
        console.error("Encountered error ", err);
        return;
    }
    console.log(data);
}

fs.readFile('readFromFile.txt', 'utf8', printFile);

for(var i =0; i<1000000000; i++){
    //Code will first run this for loop then go back to read file as it will be waitng in callback queue
}