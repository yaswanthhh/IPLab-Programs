// Importing the custom node module with the below statement
var c = require('./calculator');
var http = require('http');

var a = 5 , b = 2

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Addition " + c.add(a, b)+'<br/>');
	res.write("\n Subtraction " + c.sub(a, b)+'<br/>');
res.write("\n Multiplication " + c.mul(a, b)+'<br/>');
res.write("\n Division " + c.div(a, b));
  res.end();
}).listen(8080); 


