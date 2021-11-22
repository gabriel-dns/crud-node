const pool = require('./connect').pool;


const getProduto = (request, response) => {
  pool.query('SELECT * FROM produto', (error, results) => {
      if (error) {
        throw error
      }
     response.status(200).json(results.rows);
     
    })
   
  }
  
  
  const createProduto = (request, response) => {
    const { nome, tipo, descricao,fav,cor,tamanho,temTamanho,temCor,produto_user } = request.body
  
    pool.query('INSERT INTO produto (nome, tipo, descricao,fav,cor,tamanho,temTamanho,temCor,produto_user) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)', [nome, tipo, descricao,fav,cor,tamanho,temTamanho,temCor,produto_user], (error, result) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Produto criado com sucesso.`)
    })
  }
  
  const updateProduto = (request, response) => {
    const id = parseInt(request.params.id)
    const {nome, tipo, descricao,fav,cor,tamanho,temTamanho,temCor,produto_user,id_produto} = request.body
  
    pool.query(
      'update produto set nome= $1, tipo= $2, descricao= $3,fav= $4,cor= $5,tamanho= $6,temTamanho= $7,temCor= $8,produto_user= $9  where id_produto = $10 ',
      [nome, tipo, descricao,fav,cor,tamanho,temTamanho,temCor,produto_user,id_produto],
      (error, result) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Pessoa ${id} atualizada com sucesso.`)
      }
    )
  }
  
  const deleteProduto = (request, response) => {
    const id_user = parseInt(request.params.id_user)
  
    pool.query('DELETE FROM produto WHERE id_user = $1', [id_user], (error, result) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Produto removido com sucesso com o identificador: ${id_user}`)
    })
  }
  
  
  module.exports = {
    getProduto,
    createProduto,
    updateProduto,
    deleteProduto
  }