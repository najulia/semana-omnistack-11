const express = require('express');
const cors = require('cors');
const {errors} = require('celebrate');

const routes = require('./routes');


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app; 

/**
 * Métodos HTTP
 * GET: Buscar uma informação do back-end / retorno de informação
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação
 * DELETE: Deletar uma informação
 */

 /**
  * Tipos de parâmetro
  * Query: nomeados e enviados na rota após o simbolo de ? e geralmente servem pra filtro, paginação etc
  * Route : utilizados para identificar recursos 
  * Request Body : corpo da requisição utilizado para criar/alterar recursos. 
  */

  /**
   * SQL: MySQL, SQLite, PostGreSQL etc etc
   * NoSQL: MongoDB, CouchDB etc
   */

app.listen(3333);