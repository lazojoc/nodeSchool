'use strict'

var promise = new Promise(
	function(fulfill,reject){
	setTimeout(function(){
		const err = new Error('REJECTED!');
		reject(err);
	},300);
});


function onReject(error){
	console.log(error.message);
}

promise.then(function(){
//expected output: "REJECTED!"
	console.log("This will only be spitted out if the promise was fulfilled");
	}
).catch(function(){
	//reason => {
		console.log('REJECTED!');}
	//}
);
