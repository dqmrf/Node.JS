var mongoose = require('./libs/mongoose');
var async = require('async');

mongoose.Promise = global.Promise;

// Execute functions.
async.series([
    open,
    dropDatabase,
    requireModels,
    createUsers
], function(err) {
    mongoose.disconnect();
    process.exit(err ? 255 : 0);
});


// Functions.
function open(callback_) {
    mongoose.connection.on("open", callback_);
}

function dropDatabase(callback_) {
    mongoose.connection.dropDatabase(callback_);
}

function requireModels(callback_) {
    require('./models/user');

    async.each(Object.keys(mongoose.models), function(modelName, callback_) {
        mongoose.models[modelName].ensureIndexes(callback_);
    }, callback_);
}

function createUsers(callback_) {
    var users = [
        {username: "admin", password: "admin"},
        {username: "misha", password: "root"},
        {username: "usver", password: "1111"},
    ];

    async.each(users, function(userData, callback_) {
        var user = new mongoose.models.User(userData);
        user.save(callback_);
    }, callback_);
}