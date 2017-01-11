/* 
http server for the basic web app described in the Node Beginner Book 
https://nodejs.vn/uploads/files/1465613888434-thenodebeginnerbook.pdf
*/

var http = require("http");
var url = require("url")
var querystring = require("querystring")

function start(route, handle) {
	function onRequest(request, response) {
		var postData = "";
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");

		route(handle, pathname, response, request);

	}

	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");

}

exports.start = start;