const domain = require('domain');
const fs = require('fs');
const http = require('http');

var d = domain.create(), server;

d.on('error', function(err) {
    console.error("Domain caught %s", err);
});

d.run(function(){
    server = new http.Server();
});

server.on('crash', function() {
    setTimeout(function() {
        fs.readFile(__filename, function(err, content) {
            ERROR();
        });
    }, 1500);
});

server.emit('crash');