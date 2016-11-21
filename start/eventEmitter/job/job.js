var util = require('util');

var Job = function Job() {
    var self = this;

    this.process = function() {
        self.emit('done', {completedOn: new Date()});
    }
}

util.inherits(Job, require('events').EventEmitter);

module.exports = Job;
