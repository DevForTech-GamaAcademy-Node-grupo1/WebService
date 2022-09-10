const con = require('./database/connection');


function insert(dados){
    con.connect(function (err) {

        if (err) throw err;
        console.log("Conectado");
        
        let sql = `insert into tb_agenda (nome,email,idade,genero) values ('${dados.nome}', '${dados.email}', '${dados.idade}', '${dados.genero}')`;

        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Registro adicionado");

        });
    });
}

function deleteById(id){
    con.connect(function(err){
        if(err)throw err;
        console.log("Conectado");
        con.query(`delete from tb_agenda where nome_consumidor = '${id}'`,function(err,result,fields){
                if(err)throw err;
                console.log(result);
                console.log("Registro deletado");
    
        });
       });   
}

function deleteByEmail(id){
    con.connect(function(err){
        if(err)throw err;
        console.log("Conectado");
        con.query(`delete from tb_agenda where nome_consumidor = '${id}'`,function(err,result,fields){
                if(err)throw err;
                console.log(result);
                console.log("Registro deletado");
    
        });
       });   
}

function selectById(id){
    con.connect(function(err){
        if(err)throw err;
        console.log("Conectado");
        con.query(`select '${id}' from tb_agenda`,function(err,result){
                if(err)throw err;
                console.log(result);
                return result
        });
    });
}

function selectByEmail(email) {
    con.connect(function (err) {
        if (err) throw err;
        console.log("Conectado");
        con.query(`select '${email}' from tb_agenda`, function (err, result) {
            if (err) throw err;
            console.log(result);
            return result
        });
    });
}

async function selectAll() {
    /*con.connect((err) => {
        if (err) throw err;
        console.log("Conectado");
    }).then()*/
    con.connect(async function (err) {
        if (err) throw err;
        console.log("Conectado");
        let teste = await con.query(`select * from tb_agenda`, function (err, result) {
            if (err) throw err;
            console.log(result);
            return result;
        });
        console.log("BB"+teste);
    });
}

function updateById(dados){
    con.connect(function(err) {
        if (err) throw err;
        var sql = `UPDATE tb_agenda SET (${dados.join(',')}) WHERE id = ${dados.id}`;
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log(result.affectedRows + " record(s) updated");
        });
      });
}

function updateByEmail(dados){
    con.connect(function(err) {
        if (err) throw err;
        var sql = `UPDATE tb_agenda SET (${dados.join(',')}) WHERE email = ${dados.email}`;
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log(result.affectedRows + " record(s) updated");
        });
      });
}


module.exports ={
    insert, 
    deleteById,
    deleteByEmail,
    selectById,
    selectByEmail,
    selectAll,
    updateByEmail,
    updateById
};