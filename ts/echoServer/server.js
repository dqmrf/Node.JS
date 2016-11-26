var http = require('http');
var url = require('url');

// console.log(http.IncomingMessage);

var server = new http.Server(function(request, respond) {
    var urlParsed = url.parse(request.url, true);

    if (urlParsed.pathname === '/echo' && urlParsed.query.msg) {
        /*respond.writeHead(200, "OK", {'Cache-control': 'no-cache'});
        respond.setHeader('Cache-control', 'no-cache');*/
        respond.end(urlParsed.query.msg);
    } else {
        respond.statusCode = 404;
        respond.end('Page not found');
    }
});

server.listen(1337, '127.0.0.1');
console.log("Server is running ...");