let http = require('http');
let fs = require('fs');
let conteudo = fs.readFileSync('index.html');

http.createServer(function(req,res){
    res.end(conteudo);

}).listen(8075);