const http = require('http');
const fs = require('fs');
const chat = require('./chat');

// Entry Point.
http.createServer(function(request, response) {
    switch (request.url) {
        case '/':
            sendFile('index.html', response);
            break;

        case '/subscribe':
            chat.subscribe(request, response);
            break;

        case '/publish':
            var data = '';

            request
                .on('readable', () => {
                    var chunk;

                    if (!(chunk = request.read())) return false;

                    if (data.length > 1e2) {
                        response.statusCode = 413;
                        response.end("Your message is too big :-)");
                        request.emit("end");
                    }

                    data += chunk;
                })
                .on('end', () => {
                    try {
                        data = JSON.parse(data);
                    } catch (e) {
                        response.statusCode = 400;
                        response.end("Bad request");
                        return;
                    }
                    chat.publish(data.message);
                    response.end("ok");
                });
            break;

        default:
            response.statusCode = 404;
            response.end('Page not found {switch}');
            break;
    }
}).listen(3000);


// Functions.
function sendFile(filePath, response) {
    var readStream = fs.createReadStream(filePath);

    readStream.pipe(response);

    readStream.on('error', (err) => {
        response.statusCode = 500;
        response.end('Server Error!');
        console.error(err);
    });

    response.on('close', () => {
        readStream.destroy();
    });
}