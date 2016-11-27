var mongose = require('./libs/mongoose');
var User = require('./models/user');



mongose.connection.on("open", function() {
    var db = mongose.connection.db;

    db.dropDatabase(function(err) {
        if (err) throw err;

        var admin = new User({username: "admin", password: "admin"});
        var misha = new User({username: "misha", password: "root"});
        var loshara = new User({username: "loshara", password: "1111"});


        mongose.disconnect();
    });
});