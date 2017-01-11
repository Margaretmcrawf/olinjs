var http = require('http')
var bl = require('bl')
var url1 = process.argv[2]
var url2 = process.argv[3]
var url3 = process.argv[4]

http.get(url1, function callback1 (response1) {
	response1.setEncoding('utf8')
	response1.pipe(bl(function (err1, data1) {

		http.get(url2, function callback2 (response2) {
			response2.setEncoding('utf8')
			response2.pipe(bl(function (err2, data2) {

				http.get(url3, function callback3 (response3) {
					response3.setEncoding('utf8')
					response3.pipe(bl(function (err3, data3) {
						console.log(data3.toString())
					}))
				})
				console.log(data2.toString())
			}))
		})
		console.log(data1.toString())
	}))
})