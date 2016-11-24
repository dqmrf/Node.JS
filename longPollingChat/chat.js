var clients = [];

exports.subscribe = function(request, response) {
    console.log('[chat] subscribe');

    clients.push(response);

    response.on('close', () => {
        console.log('[chat] close');
        clients.splice(clients.indexOf(response), 1);
    });
}

exports.publish = function(message) {
    console.log("[chat] publish '%s'", message);

    clients.forEach(function(res) {
        res.end(message);
    });

    clients = [];
}