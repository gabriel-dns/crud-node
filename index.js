const app = require('express')()
const bodyParser = require('body-parser')
// const app = express()
const port = 4001

// formata e transforma os dados para o formato de objeto javascript e joga tudo isso em um objeto dentro do objeto de requisição (req): req.body.
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.listen(port, () => {
console.log('servidor rodando na porta',port);
}
)


  const prodAcess = require('./prodAcess')
  // prodAcess.getProduto;

  // console.log( prodAcess.objeto  )

  
app.get('/', prodAcess.getProduto);

  // app.post('/cadastrar', prodAcess.createProduto)
  // app.put('/alterar/:id', prodAcess.updateProduto)
  // app.put('/deletar/:id', prodAcess.deleteProduto)


  
  
