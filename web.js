var express = require('express');


var app = express.createServer(express.logger());
var inputfile = "index.html";
app.get('/', function(request, response) {
var fs = require('fs');
var data = fs.readFileSync(inputfile, 'utf8');
  response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});