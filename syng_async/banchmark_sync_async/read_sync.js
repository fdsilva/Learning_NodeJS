var fs = require('fs');
var sync_read = function(file){
	console.log("Doing sync read");
	var start = new Date().getTime();
	fs.readFile(file);
	var end = new Date().getTime();
	console.log("sync block: " +(start - end) + "ms");
};
module.exports = sync_read;


