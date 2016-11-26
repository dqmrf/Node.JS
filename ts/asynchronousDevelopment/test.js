var request = {
    url: "/echo?page=post&id=3456"
};

function parseRequestURL(json, callback_) {
    var callback = makeCallback(callback_);

    if (json.url) {
        callback(null, json.url);
    } else {
        callback('Error!');
    }
}

function makeCallback(callback_) {
    return function() {
        callback_.apply(null, arguments);
    }
}

parseRequestURL(request, function(err, contents){
    if (err) {
        console.log(err);
        return;
    }
    console.log(contents);
});
