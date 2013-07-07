var fs = require('fs');
var inputfile = "index.html";
var request = require('request');
var downloadURLDataToFile = function (url){
	var outfile = "url_content.html";
	var rsp = request(url);
	console.log("rsp = "+rsp);
	//console.log("URL is not reachable. Returned error %s . Exiting.",er.message);
	process.exit(1);
}
var assertURLExists = function(url) {
   request(url, function (error, response, body) {
  if (error) {
	 console.log("URL is not reachable. Returning error '%s'. Exiting.", error.message);
	 process.exit(1);
  }
});
   return true;
};
/*var assertURLExists = function(url) {
   var status= request(url, function (error, response, body) {
  if (error ) {
   console.log("URL is not reachable . Returns error code .");
        process.exit(1);
  }
});
console.log(status);
   return true;
};*/

var data = assertURLExists('http://sdfkdsjflkjdslkf.com');
console.log(data);