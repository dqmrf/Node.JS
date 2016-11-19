var util = require('util');

function Animal(name) {
    this.name = name;
}

Animal.prototype.walk = function() {
    console.log("Walking " + this.name);
};

function Rabbit(name) {
    this.name = name;
}

util.inherits(Rabbit, Animal);

Rabbit.prototype.jump = function() {
    console.log("Jumps " + this.name);
};

// Usage.
var rabbit = new Rabbit("Misha");
rabbit.walk();
rabbit.jump();