// var db = require('../database');
var db = require('database'); // NODE_PATH=.
var log = require('logger')(module);
db.connect();

function User(name) {
    this.name = name;
}

User.prototype.sayHello = function(who) {
    log(db.getPhrase('Hello') + ', ' +  who.name);
};

module.exports = User;