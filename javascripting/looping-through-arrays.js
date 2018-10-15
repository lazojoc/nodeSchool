'use strict'

var pets = ['cat','dog','rat'];
var total;

for (var i=0;i<3;i++){
	pets[i] = pets[i] + 's';
	total += i;
}

console.log(pets);

