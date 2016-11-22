// const fs = require('fs');
//
// var readStream = fs.createReadStream('z-read.md');
// var writeStream = fs.createWriteStream('z-write.md');
//
// readStream.pipe(writeStream);

var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('z-gzip-read.md.tar.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('z-gzip-write.md'));
