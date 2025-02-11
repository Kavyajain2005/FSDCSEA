const fs = require('fs');

function dataWrite() {
    try {
        fs.writeFileSync("data.txt","Hello Node Js using Fs module");
        console.log("data written successfully");
    }
    catch(err) {
        console.log("Error while writing the data: "+err);
    }
}

function dataRead() {
    try {
        const rf = fs.readFileSync('data.txt',{encoding: 'utf-8'});
        console.log(rf);
    }
    catch(err) {
        console.log("Error while reading the data: "+err);
    }
}

function appendFileSync() {
    try {
        fs.appendFileSync('data.txt',"appending using fs module");
        console.log("data appended successfully");
    }
    catch(err) {
        console.log("Error while appending the data: "+err);
    }
}

function unlinkSync() {
    try {
        fs.unlinkSync('data.txt');
        console.log("File deleted successfully");
    }
    catch(err) {
        console.log("Error while unlinking the data: "+err);
    }
}

const obj = {
    dataWrite : dataWrite,
    dataRead : dataRead,
    appendFileSync : appendFileSync,
    unlinkSync : unlinkSync
}

module.exports = obj;
