const con = require('./connection')


function insert(dados){
    con.connect(function (err) {

        if (err) throw err;
        console.log("Conectado");
        
        let sql = `insert into tb_agenda values ('${dados.nome}', '${dados.email}', '${dados.idade}', '${dados.genero}')`;
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Registro adicionado");

        });
    });
}

function deletebyId(id){
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

function deletebyEmail(id){
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


function select(nome){
    con.connect(function(err){
        if(err)throw err;
        console.log("Conectado");
        con.query(`select '${nome}' from consumidores`,function(err,result){
                if(err)throw err;
                console.log(result);
                return result
        });
    });
}

function updateById(dados){
    con.connect(function(err) {
        if (err) throw err;
        var sql = `UPDATE consumidores SET (${dados.join(',')}) WHERE id = ${dados.id}`;
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log(result.affectedRows + " record(s) updated");
        });
      });
}

function updateByEmail(dados){
    con.connect(function(err) {
        if (err) throw err;
        var sql = `UPDATE consumidores SET (${dados.join(',')}) WHERE email = ${dados.email}`;
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log(result.affectedRows + " record(s) updated");
        });
      });
}


module.exports ={
    insert, 
    deletebyId,
    deletebyEmail,
    select,
    updateByEmail,
    updateById
};
