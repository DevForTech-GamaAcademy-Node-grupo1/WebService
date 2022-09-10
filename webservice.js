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
                data += chunk;
            });
            req.on('end', () => {
                let json = JSON.parse('{"' + data.replace(/&/g, '","').replace(/=/g, '":"') + '"}');
                console.log(json);
                db.insert(json);
                res.writeHead(301, {
                    Location: `/`
                }).end();
            });
            break;
        case ('/view'):
            db.selectAll()
                .then(result => {
                    let page = fs.readFileSync('./html/select1.html');
                    result.forEach(el => {
                        page += `<tr>
                            <td> ${el.nome} </td>
                            <td> ${el.email} </td>
                            <td> ${el.idade} </td>
                            <td> ${el.genero} </td>
                            <td>
                                <button class="btn btn-warning" data-id="${el.id}">Editar</button>
                            </td>
                            </tr>`
                    });
                    page += fs.readFileSync('./html/select2.html');
                    res.end(page);
                })
                .catch(err => {
                    console.log(err);
                    res.end('<h1>Erro 500. Alguma coisa deu errado</h1>');
                });
    }
}).listen(8075);