var http = require ('http');

var callbackSettings = function(resquest, response){
	response.writeHead(200, {"Content-Type": "text/html"});
	if(request.url == "/"){
	
	}else if(request.url == "/benvido"){
		response.wite("<h1>Welcome :)</h1>");
	}else{
		respose.write("<h1> Sorry, we could not find this page :( </h1>");
	}
	
	response.end();
}

var server = http.createServer(callbackSettings);

var callbackServerIsRun = function (){
	console.log('The server is running');
}

server.listen(3000, callbackServerIsRun);