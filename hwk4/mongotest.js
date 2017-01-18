var mongoose = require('mongoose');
var Robot = require('./models/robotModel.js');
mongoose.createConnection('mongodb://localhost/robots');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	// we're connected!
	// var marvin = new Robot({ name: 'marvin', abilities: ['mope'], isEvil: false});
	// marvin.save(function (err, jarvis) { // TODO: fix async stuff so it saves jarvis before finding.
	// 	if (err) return console.error(err);
	// 	console.log('saved robot to mongo');
	// })
  Robot.find({
  	$or: [ { isEvil: true }, { name: "marvin"}]
  })
  .exec(function (err, bots) {
  	if (err) return handleError(err);
  	console.log(bots);
  })
});