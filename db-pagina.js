const con = require('./connection')


function insert(dados){
    con.connect(function (err) {
        if (err) throw err;
        console.log("Conectado");
        

        dados.forEach(dado => {
            let sql = `insert into tb_agenda values ('${dado.nome}', '${dado.email}')`;
            con.query(sql, function (err, result) {
                if (err) throw err;
                console.log("Registro adicionado");

            });

        })

    });
}

function del(nome){
    con.connect(function(err){
        if(err)throw err;
        console.log("Conectado");
        con.query(`delete from consumidores where nome_consumidor = '${nome}'`,function(err,result,fields){
                if(err)throw err;
                console.log(result);
                console.log("Registro deletado");
    
        });
    });
    
    
}



module.exports ={
    insert, 
    del
};
