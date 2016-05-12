var http = require('http');

var server = http.createServer(function(request, response){
	
	response.writeHead(200, {"Content-Type": "text/html"});

	if(request.url == "/"){
		response.write("<h1> Main page </h1>");

	}else if(request.url == "/welcome"){
		response.write("<h1>Welcome :)</h1>");

	}else{
		response.write("<h1> Sorry, we could not find this page :( </h1>");
	
	}
	
	response.end();
});

var callbackServerIsRun = function (){
	console.log('The server is running');
}

server.listen(3000, callbackServerIsRun);