const Pool = require('pg').Pool
exports.pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'catalogo',
  password: '1234',
  port: 5432,
})

