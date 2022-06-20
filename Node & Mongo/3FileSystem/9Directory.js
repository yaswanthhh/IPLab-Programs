var fs = require("fs");

console.log("Create directory /tmp/test");

fs.mkdir('./test',function(err) {
	if (err) {
		return console.error(err);
	}
	console.log("Directory created successfully!");
});
