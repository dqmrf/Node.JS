const fs = require('fs');

var readStream = fs.createReadStream('index.md');
var data = '';
var chunk;

readStream.on('readable', function(){
    while((chunk = readStream.read()) != null) {
        data += chunk;
    }
});

readStream.on('end', function(){
    console.log(data);
});