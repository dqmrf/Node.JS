// const fs = require('fs');
//
// var readStream = fs.createReadStream('data1.md');
// var writeStream = fs.createWriteStream('data2.md');
//
// readStream.pipe(writeStream);

var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('gzipdata.md.tar.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('output.md'));
