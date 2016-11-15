var enRu = require('./en-ru');

function User(name) {
    this.name = name;
}

User.prototype.sayHello = function(who) {
    console.log(enRu.Hello + ', ' +  who.name);
};

exports.User = User;

console.log(module);
