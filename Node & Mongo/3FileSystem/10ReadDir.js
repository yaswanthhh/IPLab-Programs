var fs = require("fs");

console.log("Read the contents of a directory");
fs.readdir("./",function(err, files) {
	if (err) {
		return console.error(err);
	}
	files.forEach( function (file) {
		console.log( file );
	});
});