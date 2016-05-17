var fs = require ('fs');
var async_read = function(file){
	console.log("Doing async read");
	var start = new Date().getTime();
	fs.readFile(file);
	var end = new Date().getTime();
	console.log("async block: " +(start - end) + "ms");
};

module.exports = async_read;