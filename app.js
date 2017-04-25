// Dependencies
const env = require('dotenv').config().parsed
const db  = require('./config/db');
const app = require('./config/express');
const routes = require('./config/routes');
const errorHandler = require('./config/errorHandler');

// Erros não previstos
process.on('uncaughtException', function(err){
  console.log('Uncaught Exception', err.message);
});

// Rotas
app.use('/', routes);

// Handler de Erros
app.use(errorHandler);

// Start Server
module.exports = app.listen(env.PORT, () => {
  console.log(`Express is running at port [${env.PORT}]...`);
  db.connect(env);
})