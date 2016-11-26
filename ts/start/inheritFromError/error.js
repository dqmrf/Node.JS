var util  = require('util');
var phrases = {"Hello": "Привет", "World": "Мир"};

function PhraseError(message) {
    this.message = message;
    Error.captureStackTrace(this, PhraseError);
}
util.inherits(PhraseError, Error);
PhraseError.prototype.name = "PhraseError";

function HttpError(status, message) {
    this.status = status;
    this.message = message;
    Error.captureStackTrace(this, HttpError);
}
util.inherits(HttpError, Error);
HttpError.prototype.name = "HttpError";


function getPhrase(name) {
    if (!phrases[name]) {
        throw new PhraseError("This phrase doesn't exists: " + name);
    }
    return phrases[name];
}

function makePage(url) {
    if (url !== "index.html") {
        throw new HttpError(404, "Page (" + url + ") not found");
    }
    return util.format("%s %s!", getPhrase("Helloo"), getPhrase("World"));
}

try {
    var page = makePage("index.html");
    console.log(page);
} catch (e) {
    if (e instanceof HttpError) {
        console.log(e.status, e.message);
    } else {
        console.error("Error: %s\nMessage: %s\nStack: %s", e.name, e.message, e.stack);
    }
}
