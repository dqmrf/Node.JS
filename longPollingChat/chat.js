var clients = [];

exports.subscribe = function(request, response) {
    console.log('![chat]: subscribe');
    clients.push(response);   
}

exports.publish = function(message) {
    console.log("![chat]: publish '%s'", message);

    clients.forEach(function(res){
        res.end(message);
    });

    clients = [];
}