
var http = require ('http');
var url = require('url');

var callback = function (request, response){

    response.writeHead(200, {"Content-type": "text/plain; charset=utf-8"});

    var parts = url.parse(request.url);

    if (parts.path == "/"){
        response.end("Site principal");
    }
    else if (parts.path == "/rota1"){
        response.end("Site da Rota 1");
    }
    else if (parts.path == "/rota2"){
        response.end("Site da Rota 2");
    }
    else if (parts.path == "/rota3"){
        response.end("Site da Rota 3");
    }
    else{
        response.end("Rota inválida: " + parts.path);
    }
};

var server = http.createServer(callback);

server.listen(3000);

console.log("Servidor iniciado com sucesso.");