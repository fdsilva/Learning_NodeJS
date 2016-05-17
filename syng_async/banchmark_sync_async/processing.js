var http = require ('http');
var fs = require('fs');

var read_async = require('./read_async');
var read_sync = require('./read_sync');
var file = "./node.zip";
var stream = fs.createWriteStream(file);
var download = "http://nodejs.org/dist/v0.10.12/node-v0.10.12.tar.gz";

http.get(download, function(res) {
	console.log("downloading Node.js");
	res.on('data', function(data){
		stream.write(data);
});

res.on('end', function(){
	stream.end();
	console.log("Download Ended!");
	read_async(file);
	read_sync(file);
	});
});