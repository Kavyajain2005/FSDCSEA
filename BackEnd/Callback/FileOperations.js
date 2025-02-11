const fs = require('fs');
fs.writeFile('data.txt',"Welcome to FSD Session",()=>{
    console.log("Data written successfully");
})

fs.readFile('data.txt',(err,data)=>{
    if(err) {
        console.log("Error while reading the data: "+err);
    }
    console.log(data.toString());
})

fs.appendFile('data.txt', " appending fs module", ()=>{
    console.log("Data appended successfully");
})

fs.unlinkSync('data.txt', ()=> {
    console.log("File deleted successfully");
})
