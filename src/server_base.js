// prueba para servidor
var http = require('http');

var server = http.createServer((req, res)=>{

  if(req.url === '/'){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('<html><body><h1>HOLA!</h1></body></html>');
  }else if(req.url === '/exit'){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('<html><body><h1>Adios!</h1></body></html>');
  }else{
    res.writeHead(404, {'Content-Type':'text/html'});
    res.write('<html><body><h1>NO HAY!!</h1></body></html>');
  }
  res.end();

});


server.listen(4000);

console.log('puerto: 4000');
