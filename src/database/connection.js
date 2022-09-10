let mysql=require('mysql2');

//Criando uma conexão 
let con = mysql.createConnection({
    // Criando as variáveis de conexão no Banco de Dados
    host:"localhost",
    user:"root",
    password:"mysql",
    database:"webservice"
});


module.exports = con ;