// code goes here :)

var sum = items.reduce(function(a,b){
	return a + b.price 
}, 0)
var answer1 = docment.querySelector("#answer1")
answer1.innerHTML = `The sum is ${sum}`