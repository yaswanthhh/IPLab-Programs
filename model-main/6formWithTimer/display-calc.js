var http = require('http');
var calc = require("./calculator.js");

http.createServer(function(request ,response) {
    response.writeHead(200, {"Content-Type":"text/html"});
    var a=10;
    var b=2;
    response.write("Addition of two numbers a and b is:"+calc.add(a,b)+"<br />");
    response.write("Subtraction of two numbers a and b is:"+calc.sub(a,b)+"<br />");
    response.write("Multiplication of two numbers a and b is:"+calc.mul(a,b)+"<br />");
    response.write("Division of two numbers a and b is:"+calc.div(a,b)+"<br />");
    response.write("Mod of two numbers a and b is:"+calc.mod(a,b)+"<br />");
    response.write("Power of two numbers a and b is:"+calc.pow(a,b)+"<br />");
    response.end();
}).listen(8080);