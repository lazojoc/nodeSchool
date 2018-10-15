'use strict'

var first = function first(){
	return 3;
}

var second = first.then(function (results){
	return results;
});

second.then(function (results){});

