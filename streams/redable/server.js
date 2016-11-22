const fs = require('fs');

var readStream = fs.createReadStream('index.md');
// var writeStream = fs.createWriteStream('index2.md');

var data = '';

readStream.setEncoding('utf-8');

readStream.on('data', function(chunk){
    data += chunk;
    // this.pause();
    // console.log(this.isPaused());
});

readStream.on('end', function(){
    console.log(data);
});

// readStream
//     .pipe(writeStream);
