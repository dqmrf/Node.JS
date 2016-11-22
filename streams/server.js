const fs = require('fs');

var readStream = fs.createReadStream('index.md');
var data = '';

readStream.on('data', function(chunk){
    data += chunk;
});

readStream.on('end', function(){
    console.log(data);
});