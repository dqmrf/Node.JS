var db = require('./database');
// var db = require('database'); // NODE_PATH=.
var log = require('logger')(module);
var User = require('./user');

function run() {
    // db.connect();

    var misha = new User('Misha');
    var undef = new User('Undefined');

    misha.sayHello(undef);
    
    log(db.getPhrase('Run succesfull'));
}

if (module.parent) {
    exports.run = run;
} else {
    run();
}