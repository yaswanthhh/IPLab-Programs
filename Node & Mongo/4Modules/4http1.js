// Split the query string into readable parts
var http = require('http');
var url = require('url'); //url module

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8080);

// localhost:8080/?year=2022&month=May
// localhost:8080/?year=2023&month=Nov