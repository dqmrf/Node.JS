var phrases;

exports.connect = function() {
    phrases = require('./en-ru.json');
};

exports.getPhrase = function(name) {
    if (!phrases[name]) {
        throw new Error('Phrase ' + name + ' does\'nt exists');
    }
    return phrases[name];
};