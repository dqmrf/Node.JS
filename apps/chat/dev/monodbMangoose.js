var User = require('../models/user').User;

var user = new User({
    username: "Misha",
    password: "777"
});

user.save(function(err, user, res) {
    if (err) throw err;

    User.findOne({username: "Misha"}, function(err, user) {
        console.log(user.salt);
    });
});