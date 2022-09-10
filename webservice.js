let http = require('http');
let fs = require('fs');
let content = fs.readFileSync('./html/index.html');

http.createServer(function(req,res){
    res.end(content);

}).listen(8075);