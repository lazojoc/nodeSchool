'use strict';

var promise = new Promise(
	function (fulfill, reject){
		setTimeout(function(){ 
			console.log("FULFILLED!");
		},300);
	}
).then(function(){
	console.log("Promise content: " + promise);
	});

