let http = require('http');
let fs = require('fs');
let content = fs.readFileSync('./html/index.html');
const db = require('./src/db-pagina');

http.createServer(async function(req,res){
    switch (req.url) {
        case ('/'):
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
            break;
        case ('/create'):
            console.log('oi');
            let data = '';
            req.on('data', chunk => {
                //data = JSON.parse('{"' + chunk.toString().replace(/&/g, '","').replace(/=/g, '":"') + '"}');
                data += chunk;
                //console.log(data);
            });
            req.on('end', () => {
                //console.log(data);
                let json = JSON.parse('{"' + data.replace(/&/g, '","').replace(/=/g, '":"') + '"}');
                console.log(json);
                db.insert(json);
                res.writeHead(301, {
                    Location: `/`
                }).end();
            });
            /*res.writeHead(301, {
                Location: `/`
            }).end(() => {
                //console.log(data);
                //let json = JSON.parse('{"' + data.replace(/&/g, '","').replace(/=/g, '":"') + '"}');
                //console.log(json);
                db.insert(data);
            });*/
            break;
        case ('/view'):
            let cadastros = await db.selectAll();
            console.log(cadastros);
            /*let page = fs.readFileSync('./html/select1.html');
            cadastros.forEach(el => {
                page += `<tr>
                    <td> ${el.nome} </td>
                    <td> ${el.email} </td>
                    <td> ${el.idade} </td>
                    <td> ${el.genero} </td>
                </tr>`
            });
            fs.readFileSync('./html/select2.html');
            res.end(page);*/
            res.end('oi');
    }
}).listen(8075);