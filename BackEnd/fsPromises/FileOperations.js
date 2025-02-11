const promise = require('fs').promises;
const fsp = promise.writeFile('data.txt',"Hello using fs promises to write data");
fsp.then(()=>{
    console.log("Data written successfully");
}).catch((err)=>{

}).finally(()=>{
    
})