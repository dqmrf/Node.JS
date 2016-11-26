const http = require('http');
const opts = require('optimist').argv;


var server = http.createServer(function(req, res) {
    res.end('Running');
}).listen(opts.port);