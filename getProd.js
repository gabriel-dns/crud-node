const pool = require('./connect').pool;



function getProduto(){
  var objeto;

    pool.query('SELECT * FROM produto',function getget(error, results) {
        if (error) {
          throw error
        }
        objeto=JSON.stringify(results.rows);
        console.log(objeto)
        


      // jsonFile.writeFile(jsonFile);


      })
      
      
      
      // 
    }
    // var produtos = new Object();
    // produtos =

    var outro= new Object();
   getProduto();
  