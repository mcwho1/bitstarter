var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

var myresponse = fs.readFileSync("index.html").toString();

app.get('/', function(request, response) {
  response.send(myresponse);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
