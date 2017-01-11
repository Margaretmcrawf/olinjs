var catData = require('./catData');
var db = require('../fakeDatabase');

var colors = catData.colors;
var names = catData.names;

function Cat(name){

	var age = Math.floor(Math.random() * 20 + 1);
	var catColors = [];
	colors.forEach(function (element) {
		if (Math.random() > 0.8) {
			catColors.push(element);
		}
	})
	var cat = {
	name: name,
	age: age,
	"colors": catColors
	};

	return cat;
}

var home = function(req, res){
  res.render("home", {"classes": [
  "Olin.js",
  "other class 1",
  "other class 2",
  "other class 3"]
	});
};

var newcat = function (req, res) {
	var catName = names[Math.floor((Math.random() * names.length))];
	db.add(Cat(catName));
	res.send("Added cat!");
}

var cats = function (req, res) {
	var allCats = db.getAll();
	if (req.params.color) {
		console.log("getting all cats with the color " + req.params.color);
		var color = colorFilter = req.params.color;
		var cats = [];
		allCats.forEach(function (element) {
			var colorArray = Array.from(element.colors);
			if (colorArray.indexOf(color) != -1) {
				cats.push(element);
			}
		})
	} else {
		var cats = allCats;
	}
	cats.sort(function (a, b) {
		return a.age - b.age;
	})
	var catList = [];
	cats.forEach(function (cat) {
		var string = cat.name + ", age " + cat.age + ", colors are " + cat.colors + "."
		catList.push(string);
	})
	res.render("cats", {"cats": catList});
};

var old = function (req, res) {
	var cats = db.getAll();
	var catsCopy = cats.slice();
	var oldCat = cats.slice(0).sort(
		function (a, b) { return b.age - a.age})[0]

	db.remove(cats.indexOf(oldCat));
	res.send("We sent " + oldCat.name + " to a farm in the country because it was getting too old.");
}

module.exports.home = home;
module.exports.newcat = newcat;
module.exports.cats = cats;
module.exports.old = old;