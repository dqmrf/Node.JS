var EventEmitter = require('events').EventEmitter;

var model = new EventEmitter();

function Request() {
    var self = this;

    this.bigData = new Array(1e6).join('*');

    this.send = function(data) {
        console.log(data);
    };

    function onData(info) {
        self.send(info);
    }

    this.end = function() {
        model.removeListener('data', onData);
    };

    model.on('data', onData);
}

setInterval(function() {
    var request = new Request();
    // ...
    request.end();
    console.log(process.memoryUsage().heapUsed);
    console.log(model);
}, 200);

// console.log(process.memoryUsage());