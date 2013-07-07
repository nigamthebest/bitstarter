var fs = require('fs');
var inputfile = "index.html";

var data = fs.readFileSync(inputfile, 'utf8');
console.log(data);