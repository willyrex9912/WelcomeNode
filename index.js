let http = require('http');
let fs = require('fs');

const ip = '127.0.0.1';
const port = 4000;

http.createServer(function(request,response){

    console.log('request',request.url);
    let file = "./resources/index.html";
    let file404 = "./resources/notfound.html";
    if(request.url=="/archivos/index"){
        fs.readFile(file,function(error,content){
            if(error){
                response.writeHead(error.code,error.message);
                response.end();
            }else{
                response.end(content,'utf-8');
            }
        });
    }else{
        fs.readFile(file404,function(error,content){
            if(error){
                response.writeHead(error.code,error.message);
                response.end();
            }else{
                response.end(content,'utf-8');
            }
        });
    }
}).listen(port,ip);

console.log('Running at http://'+ip+":"+port+"/");
