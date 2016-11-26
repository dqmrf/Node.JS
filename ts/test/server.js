var http = require('http');
var path = require('path');
var url = require('url');

var server = http.createServer(function(req, res) {

    console.log(url.parse(req.url, true));
    console.log(url.format(url.parse(req.url, true)));


}).listen(3000);
