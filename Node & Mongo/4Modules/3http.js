var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'}); //http header
  res.write('Hello World!');
  res.write(req.url); //retrives the url content
  res.end();
}).listen(8080); 

// http://localhost:8080/hello
// http://localhost:8080/nodejs