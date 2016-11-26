var util = require('util');

var obj = {
    a: 5,
    b: 10,
    c: 20,
    inspect: function() {
        return 123;
    }
};

obj.self = obj;

console.log(util.inspect(obj));