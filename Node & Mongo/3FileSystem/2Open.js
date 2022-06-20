var fs = require("fs");

// Asynchronous - Opening File
console.log("Open a file!");

fs.open('input.txt', 'r+', function(err, fd) {
	if (err) {
		return console.error(err);
	}
	console.log("File opened successfully!"); 
});
