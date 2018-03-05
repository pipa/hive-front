// requiring the HTTP interfaces in node
var http = require('http');

// create an http server to handle requests and response
http.createServer(function (req, res) {

  // sending a response header of 200 OK
  res.writeHead(200, {'Content-Type': 'text/plain'});
  console.log(123);

  // print out Hello World
  res.end('Im the front 5!\n');

// use port 9999
}).listen(9999);

console.log('Server running on port 9999.');
