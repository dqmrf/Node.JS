const fs = require('fs');

var readStream = fs.createReadStream('z-read.md');
var writeStream = fs.createWriteStream('z-write.md');

var counter = 0;

readStream.on('data', (chunk) => {
    console.log(counter++, writeStream.write(chunk));
});

writeStream.on('drain', () => {
    console.log('++drain');
});

writeStream.on('end', () => {
    console.log('++end');
});