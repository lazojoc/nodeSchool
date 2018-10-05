'use strict'

console.log('Starting script');
var promise1 = Promise.resolve('Yay, my promise was kept');
var promise2 = Promise.reject(new Error('Boo, I broke my promise'));

promise2.catch(function(err)){
	console.error(err.message);
	console.log(err.message);
}

promise1.then(console.log);
console.log('Ending script');
