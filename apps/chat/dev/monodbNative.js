var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

var url = 'mongodb://localhost:27017/chat';


MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);

    console.log("Connected correctly to server");

    // Define collection.
    var collection = db.collection('documents');

    // // Remove collection.
    // collection.remove({}, function(err, res) {
    //     if (err) throw err;
    // });

    // // Insert many yo collection.
    // collection.insertMany([
    //     {a: 1}, {a: 2}, {a: 3}
    // ], function(err, result){
    //     console.log(result);
    // });

    // // Updating collection.
    // collection.updateOne({a: 2}, {$set: {b: 1}}, function(err, res) {
    //     console.log(res);
    // });

    // // Delete collection.
    // collection.deleteOne({b: 1}, function(err, res) {
    //     console.log(res);
    // });

    // Find all field in 'documents'
    collection.find({}).toArray(function(err, res){
        console.log(res);
    });

    db.close();
});