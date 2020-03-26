const express = require('express');
const cors = require('cors');
const routers = require('./routes');

const app = express();

app.use(cors());
app.use(express.json(
//  {origin: 'http://meuapp.com'} // caso o aplicativo/front-end esteja hospedado neste endereço, ou seja, em produção.
));
app.use(routers);

app.listen(3333);

/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar/Listar uma informação do back-end
  * POST: Criar uma informação do back-end
  * PUT: Alterar uma informação do back-end
  * DELETE: Deletar uma informação do back-end
  */

/**
  * Tipos de Parâmentros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos 
  */

  /**
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc...
   */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select('*').where() 
   */