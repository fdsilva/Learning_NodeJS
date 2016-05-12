var http = require('http');
var fs = require('fs');
var url = require('url');

var callbackServer = function(request, response){
	
	response.writeHeader(200, {'Content-Type': 'text/html'});
	var result = url.parse(request.url).pathname;

	if(result == "/" /*&& result == "/main"*/){
		//response.write("<h1>Teste</h1>");
		fs.readFile(__dirname + '/main.html', function(error, html){
			response.write(html);
		});
	
	}else if(result == "/contact"){
		fs.readFile(__dirname+'/contact.html', function(error, html){
			response.write(html);
		});
	
	}else{
		fs.readFile(__dirname+'/error.html', function(error, html){
			response.write(html);
		});

	}

	response.end();
}

var callbackLog = function(){
	console.log("server is running");
}

var service = http.createServer(callbackServer);
service.listen(3000, callbackLog);

