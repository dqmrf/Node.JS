var http = require('http');

var server = new http.Server(function(request, respond){
    // ...
}).listen(3000);

setTimeout(function(){
    server.close(function(){
        clearInterval(interval);
    });
}, 2500);

setTimeout(function(){
    server.close(function(){
        process.exit();
    });
}, 2500);

var interval = setInterval(function(){
    console.log(process.memoryUsage());
}, 1000);

interval.unref();