var http = require('http');
var fs = require('fs');

var serverCallBack = function(request, response){
	// __dirname returns root dir of the application
	fs.readFile(__dirname + '/index.html', function(err, html){
		response.writeHeader(200, {'Content-Type': 'text/html'});
		response.write(html);
		response.end();

	});
}

var server = http.createServer(serverCallBack);

var logCallback = function (){
	console.log("THe server is running now!!");
}

server.listen(3000, logCallback);