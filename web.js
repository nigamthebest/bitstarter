var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var inputfile = "index.html";
app.get('/', function(request, response) {
var data = fs.readFile(inputfile, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  return data;
});
  response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});