var http = require('http');

http.createServer(function (req, res) {
  console.log("incomming http request...");;
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Wellcome Boss v9');
}).listen(3001);
console.log("Server started!");;
