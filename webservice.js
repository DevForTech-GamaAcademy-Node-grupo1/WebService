let http = require('http');
let fs = require('fs');
let content = fs.readFileSync('./html/index.html');

http.createServer(function(req,res){
    switch (req.url) {
        case ('/'):
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
            break;
        case ('/create'):
            req.on('data', chunk => {
                let data = JSON.parse('{"' + chunk.toString().replace(/&/g, '","').replace(/=/g, '":"') + '"}');
                console.log(data);
            });
            res.writeHead(301, {
                Location: `/`
            }).end();
            break;
    }
}).listen(8075);