var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var fs = require("fs");

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var mysort = { name: 1 };
  dbo.collection("customers").find({}, { projection: { _id: 0, name: 1} }).sort(mysort).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
	console.log("Going to write into existing file");
	fs.writeFile('input.txt', JSON.stringify(result), function(err) {
		if (err) {
		return console.error(err);
	}
   
   console.log("Data written successfully!");
   console.log("Let's read newly written data");
   
   fs.readFile('input.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("Asynchronous read: " + data.toString());
   });
});
    db.close();
	
  });
}); 