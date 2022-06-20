var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
     if(err) throw err;
	 console.log(err);

     //Write databse Insert/Update/Query code here..
                
});