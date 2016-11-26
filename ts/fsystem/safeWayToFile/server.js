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

    sendFileSafe(url.parse(request.url).pathname, response);

}).listen(3000);


function checkAccess(request) {
    return url.parse(request.url, true).query.key == ACCESS_KEY;
}

function sendFileSafe(filePath, response) {
    try {
        filePath = decodeURIComponent(filePath);
    } catch (e) {
        response.statusCode = 400;
        response.end('Bad Request {decode}');
        return;
    }

    if (~filePath.indexOf('\0')) {
        response.statusCode = 400;
        response.end('Bad Request {bit}');
        return;
    }

    filePath = path.normalize(path.join(ROOT, filePath));

    if (filePath.indexOf(ROOT) != 0) {
        response.statusCode = 404;
        response.end('Page not found {indexOf}');
        return;
    }

    fs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
            response.statusCode = 404;
            response.end('Page not found {stat}');
            return;
        }

        sendFile(filePath, response);
    });
}

function sendFile(filePath, response) {
    var file = fs.createReadStream(filePath);

    {
        file.pipe(response);
        // EQUAL {pipe}
    }

    file.on('error', (err) => {
        response.statusCode = 500;
        response.end('Server Error!');
        console.error(err);
    });

    file
        .on('open', () => {
            console.log('~![open file]');
        })
        .on('close', () => {
            console.log('~![close file]');
        });

    response.on('close', () => {
        console.log('~![destroy file]');
        file.destroy();
    });
}

{ // EQUAL {/pipe}
    file.on('readable', write);

    function write() {
        var chunk = file.read();

        if (chunk && !response.write(chunk)) {
            file.removeListener('readable', write);

            response.once('drain', () => {
                file.on('readable', write);
                write();
            });
        }
    }

    file.on('end', () => {
        response.end();
    });
}

// function sendFile(filePath, response) {
//     fs.readFile(filePath, (err, content) => {
//         if (err) throw err;

//         var mime = require('mime').lookup(filePath);
//         response.setHeader('Content-Type', mime + '; charset=utf-8');
//         response.end(content);
//     });
// }