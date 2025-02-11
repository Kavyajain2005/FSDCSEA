const {dataWrite, dataRead, appendFileSync, unlinkSync} = require('./FileOperations');
const pr = dataWrite();
console.log(pr);

const rr = dataRead();
console.log(rr);

const ar = appendFileSync();
console.log(ar);

const ur = unlinkSync();
console.log(ur);
