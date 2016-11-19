var EventEmitter = require('events').EventEmitter;
var util = require('util');

var server = new EventEmitter();

server.on('request', function(request) {
    request.approve = true;
});

server.on('request', function(request) {
    console.log(request);
});

server.emit('request', {from: "client"});
server.emit('request', {from: "other client"});

