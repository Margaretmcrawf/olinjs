var fs = require('fs')
module.exports = function (dir, filter, callback) {

	var ext = fs.readdir(dir, function (err, list) {

		if (err) {
			callback(err, null)
		} else {
			var result = []
			for (var i = 0; i < list.length; i++) {
				if (list[i].includes('.' + filter)) {
					result.push(list[i])
				}
			}
			callback(null, result)
		}

	})
}