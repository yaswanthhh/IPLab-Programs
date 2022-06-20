var mongoclient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1/27017/";
var fs = require('fs');

mongoclient.connect(url, function(err, db){
    if(err) {
        throw err;
    }
    var dbo = db.db('test');
    dbo.createCollection("employee", function(err, result) {
        if(err) {
            throw err;
        }
        var values = [{"name":"Shreya", "dept":"cse", "allowance":10000},
        {"name":"Sriram", "dept":"ece", "allowance":30000},
        {"name":"Gayathri", "dept":"eee", "allowance":5000}];
        dbo.collection("employee").insertMany(values, function(err, result) {
            if(err) {
                throw err;
            }
            var query = {"dept":"cse"};
            var new_values = {$set: {"allowance":20000}}
            dbo.collection("employee").update(query,new_values,function(err, result) {
                if(err) {
                    throw err;
                }
                dbo.collection("employee").find({}).sort().toArray(function (err, result) {
                    fs.writeFile("input.txt", JSON.stringify(result), function(err, result) {
                        if(err) {
                            throw err;
                        }
                        console.log("Written successfully");
                    });
                });
            });
        });
    });
});