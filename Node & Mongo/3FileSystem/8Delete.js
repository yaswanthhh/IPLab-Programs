var fs = require("fs");

console.log("Delete an existing file");

fs.unlink('sample.txt', function(err) {
	if (err) {
		return console.error(err);
	}
	console.log("File deleted successfully!");
});
