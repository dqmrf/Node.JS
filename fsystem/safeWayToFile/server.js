const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

const ROOT = __dirname + '/public';
const ACCESS_KEY = 777;

http.createServer(function(request, response){

    if (!checkAccess(request)) {
        response.statusCode = 403;
        response.end("You can't have an access to this page!");
        return;
    }
}).listen(3000);

function checkAccess(request) {
    return url.parse(request.url, true).query.key == ACCESS_KEY;
}