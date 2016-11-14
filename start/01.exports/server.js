var user = require('./user');

var misha = new user.User('Misha');
var undef = new user.User('Undefined');

misha.sayHello(undef);