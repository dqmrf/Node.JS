const fs = require('fs');

fs.readdir(__dirname, (err, items) => {
    for (var i=0; i<items.length; i++) {
        var file = __dirname + '/' + items[i];

        console.log('Start: ' + file);
 
        fs.stat(file, function(file) {
            return function(err, stats) {
                console.log(file);
                console.log(stats['size']);
            }
        }(file));
    }
});