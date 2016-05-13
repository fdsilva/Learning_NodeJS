var http = require('http');
var fs = require('fs');
var url = require('url');

var callbackServer = function(request, response){
		
	var result = url.parse(request.url).pathname;
	response.writeHeader(200, {'Content-Type': 'text/html'});

	if(result == "/" || result == "/main"){
		fs.readFile(__dirname + '/html/main.html', function(err, html){
			
			if(err){
				throw err;
			}

			response.write(html);
			response.end();
		});
	
	}else if(result == "/contact"){
		fs.readFile('/html/contact.html', function(err, html){
			if(err){
				throw err;
			}

			response.write(html);
			response.end();
		});
	
	}else{
		fs.readFile(__dirname+'/html/error.html', function(err, html){
			if(err){
				throw err;
			}

			response.write(html);
			response.end();
		});
	}
}

var callbackLog = function(){
	console.log("server is running");
}

var service = http.createServer(callbackServer);
service.listen(3000, callbackLog);