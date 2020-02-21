// prueba para servidor
var http = require('http');
var url = require('url');
var queryStr = require('querystring');
var { export_error, export_info } = require('./modules/log');
var consts = require('./utils/consts');

var {countries} = require('countries-list');

var server = http.createServer((req, res)=>{

  var parsed = url.parse(req.url);
  var pathname = parsed.pathname;
  var qrystr = queryStr.parse(parsed.query);
  console.log(qrystr);
  

  if(pathname === '/' || pathname === '/home'){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('<html><body><h1>HOLA!</h1></body></html>');
  }else if(pathname === '/info'){
    let result = export_info(pathname);
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write(`<html><body><h1>INFO!</h1><p>${result}</p></body></html>`);
  }else if(pathname === '/countrys'){
    res.writeHead(200, {'Content-Type':'application/json'});
    res.write(JSON.stringify(countries[qrystr.code]));
  }else if(pathname === '/error'){
    let result = export_error(pathname);
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write(`<html><body><h1>ERROR!</h1><p>${result}</p></body></html>`);
  }else if(pathname === '/exit'){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('<html><body><h1>Adios!</h1></body></html>');
  }else{
    res.writeHead(404, {'Content-Type':'text/html'});
    res.write('<html><body><h1>NO HAY!!</h1></body></html>');
  }
  res.end();

});

server.listen(4000);

