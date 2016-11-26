var fs = require('fs');

console.log(process.argv);

fs.stat(__filename, function(err, stats){
    if (err) throw err;

    console.log(stats.isFile());
    console.log(stats);
});