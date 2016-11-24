const http = require('http');
const fs = require('fs');
const chat = require('./chat');

// Entry Point.
http.createServer(function(request, respond) {
    switch (request.url) {
        case '/':
            sendFile('index.html', respond);
            break;

        case '/subscribe':
            chat.subscribe(request, respond);
            break;

        case '/publish':
            chat.publish('...');
            break;

        default:
            respond.statusCode = 404;
            respond.end('Page not found {switch}');
    }
}).listen(3000);


// Functions.
function sendFile(filePath, response) {
    var file = fs.createReadStream(filePath);

    file.pipe(response);

    file.on('error', (err) => {
        response.statusCode = 500;
        response.end('Server Error!');
        console.error(err);
    });

    response.on('close', () => {
        file.destroy();
    });
}