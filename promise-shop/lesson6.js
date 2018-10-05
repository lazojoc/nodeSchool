'use strict'

var promise = new Promise(function(resolve,reject)){
	resolve('Promise was kept');
	reject(new Error('Promise broke'));
});

function onReject(error){
	console.log(error.message);
}

promise.then(console.log)
	.catch onReject;

