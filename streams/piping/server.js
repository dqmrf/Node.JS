// var fs = require('fs');
// var zlib = require('zlib');

// fs.createReadStream('z-gzip-read.md.tar.gz')
//     .pipe(zlib.createGunzip())
//     .pipe(fs.createWriteStream('z-gzip-write.md'));

const fs = require('fs');
const assert = require('assert');

var readStream = fs.createReadStream('z-read.md');
var writeStream = fs.createWriteStream('z-write.md');

writeStream.on('pipe', (src)=>{
    console.info('Something is piping into the writer.');
})

var stream = readStream.pipe(writeStream);

stream.on('finish', ()=>{
    console.log('~![stream has finished]');
});
