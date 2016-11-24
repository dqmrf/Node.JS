const fs = require('fs');

var writeStream = fs.createWriteStream('z-million.md');

writeOneMillionTimes(writeStream, 'data\n', 'utf-8', ()=>{console.log('~![end write in callback]')});

function writeOneMillionTimes(writer, data, encoding, callback) {
    var i = 1000000;
    write();

    function write() {
        var ok = true;

        do { i -= 1;
            if (i === 0) {
                writer.write(data, encoding, callback);
            } else {
                ok = writer.write(data, encoding);
            }
        } while(i > 0 && ok);

        if (i > 0) {
            writer.once('drain', write);
        }
    }
}