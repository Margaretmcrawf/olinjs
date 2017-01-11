var pizzaToppings = ['tomato sauce', 'cheese', 'pepperoni'];
// console.log(pizzaToppings);

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var filtered = arr.filter(function (number) {
	return number % 2 === 0; 
});
//console.log(filtered);

var food = ['apple', 'pizza', 'pear'];
//console.log(food[1]);

var pets = ['cat', 'dog', 'rat'];
for (i=0; i < pets.length; i++) {
	pets[i] = pets[i] + 's';
}
console.log(pets);