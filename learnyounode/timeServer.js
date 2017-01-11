var net = require('net')
var server = net.createServer( function (socket) {
	var date = new Date()

	//use zerofill to be less bad probably
	var dateString = date.getFullYear() + "-MM-DD " + date.getHours() + ":" + date.getMinutes() + "\n"
	if ((date.getMonth() + 1).toString().length == 1) {
		dateString = dateString.replace("MM", "0" + (date.getMonth() + 1))
	} else {
		dateString = dateString.replace("MM", (date.getMonth() + 1))
	}

	if (date.getDate().toString().length == 1) {
		dateString = dateString.replace("DD", "0" + date.getDate())
	} else {
		dateString = dateString.replace("DD", date.getDate())
	}

	socket.write(dateString)
	socket.end()
})
server.listen(process.argv[2])