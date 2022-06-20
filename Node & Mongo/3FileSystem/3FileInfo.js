var fs = require("fs");

console.log("Get file info!");

fs.stat('input.txt', function (err, stats) {
	if (err) {
		return console.error(err);
	}
	console.log(stats);
	console.log("Got file info successfully!");
	// Check file type
	console.log("isFile ? " + stats.isFile());
	console.log("isDirectory ? " + stats.isDirectory()); 
});
