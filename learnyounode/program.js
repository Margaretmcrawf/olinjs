// var sum = 0;
// for (var i =2; i < process.argv.length; i++) {
// 	sum += parseInt(process.argv[i]);
// }
// //console.log(sum);

// //synchronous
// var fs = require('fs'); //stands for Fancy Shit... or maybe File System. Literally nobody knows for sure.
// var buf = fs.readFileSync(process.argv[2]); //the first command line argument... the filepath
// var str = buf.toString();
// var l = str.split('\n'); //get the number of newline characters by gettin the length of the split list - 1
// // console.log(l.length - 1);

// //async
// var fs = require('fs'); 
// var len = undefined;
// function asyncLength(callback) {
// 	var buf = fs.readFile(process.argv[2], callback)
// }
// function logCallback(err, buf) {
// 	var str = buf.toString();
// 	var l = str.split('\n'); 
// 	len = l.length - 1
// 	console.log(len);
// }
// asyncLength(logCallback)

// var fs = require('fs')

// function asyncFilter() {
// 	var ext = fs.readdir(process.argv[2], function filterCallback(err, list) {
// 		for (var i = 0; i < list.length; i++) {
// 			if (list[i].includes('.' + process.argv[3])) {
// 				console.log(list[i])
// 			}
// 		}
// 	})
// }

// asyncFilter()

var mymodule = require('./mymodule.js')
var dir = process.argv[2]
var filter = process.argv[3]


mymodule(dir, filter, function filterCallback(err, list) {
		for (var i = 0; i < list.length; i++) {
			console.log(list[i])
			}

		})

