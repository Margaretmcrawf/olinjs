// // basic http server
// var http = require('http')
// var fs = require('fs')

// var server = http.createServer(function (req, res) {

// 	var readStream = fs.createReadStream(process.argv[3])

// 	readStream.on('open', function () {
//     readStream.pipe(res);
//   });

// })
// server.listen(process.argv[2])


// //uppercaser
// var http = require('http')
// var map = require('through2-map')  

// var server = http.createServer(function (req, res) {

// 	req.pipe(map(function (chunk) {
// 		return chunk.toString().toUpperCase()
// 	})).pipe(res)
//   });

// server.listen(process.argv[2])

//http json api
var http = require('http')
var map = require('through2-map')
var url = require('url')

var port = process.argv[2]

var server = http.createServer(function (req, res) {

	res.writeHead(200, { 'Content-Type': 'application/json' })
	var urlObject = url.parse(req.url, true)
	if (urlObject.pathname == "/api/parsetime") {
		var date = new Date(urlObject.query.iso)
		var output = {
			"hour": date.getHours(),
			"minute": date.getMinutes(),
			"second": date.getSeconds()
		}
		res.end(JSON.stringify(output))
	} else if (urlObject.pathname == "/api/unixtime") {
		var date = new Date(urlObject.query.iso)
		var output = {
			"unixtime": date.getTime()
		}
		res.end(JSON.stringify(output))
	}
  });

server.listen(port)


