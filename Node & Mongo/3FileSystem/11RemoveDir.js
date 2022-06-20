var fs = require("fs");

console.log("Delete directory test ");
fs.rmdir("./test",function(err) {
	if (err) {
		return console.error(err);
	}
	console.log("Read directory after deleting");
	fs.readdir("./",function(err, files) {
		if (err) {
			return console.error(err);
		}
		files.forEach( function (file) {
			console.log( file );
		});
	});
});