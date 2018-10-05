'use strict'

var promise = new Promise(
	function(fulfill,reject){
		fulfill('I FIRED');

		const err = new Error('I DID NOT FIRE');
		reject(err);
	}
);


function onReject(error){
	console.log(error.message);
}


promise.then(console.log,onReject);
