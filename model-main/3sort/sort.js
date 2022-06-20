//Create a database in MongoDB , create a collection , sort the collection and output it into a File.

var MongoClient = require('mongodb').MongoClient;
var fs = require('fs');
const { brotliDecompress } = require('zlib');
var url = "mongodb://127.0.0.1:27017/"

MongoClient.connect(url, function(err, db) {
    if(err) {
        throw err;
    }
    console.log("Database connected");
    var dbo = db.db("test");
    dbo.collection("students").drop(function(err){
        if(err) {
            throw err;
        }
    });
    dbo.createCollection("students", function(err, result) {
        if(err) {
            throw err;
        }
        console.log("collection created");
        var value = {"name":"Shreya", "regno":30};
        var values = [{"name":"Shraddha", "regno":31},{"name":"Tom", "regno":32}];
        dbo.collection("students").insertOne(value, function(err, result) {
            if(err) {
                throw err;
            }
            console.log("inserted one");
        });
        dbo.collection("students").insertMany(values, function(err, result) {
            if(err) {
                throw err;
            }
            console.log("inserted many");
        });
        var order = {name:-1};
        dbo.collection("students").find({}).sort(order).toArray(function(err, result) {
            if(err) {
                throw err;
            }
            fs.writeFile("input1.txt", JSON.stringify(result), function(err) {
                if(err) {
                    throw err;
                }
            });

        });
    });
});