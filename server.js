// Dependencies
const env = require('dotenv').config().parsed
const db  = require('./config/db');
const app = require('./config/express');
const routes = require('./config/routes');
const webpack = require('./config/webpack');
const errorHandler = require('./config/errorHandler');

// Erros não previstos
process.on('uncaughtException', function(err){
  console.log('Uncaught Exception', err.message);
});

// Rotas
app.use('/api', routes);

// Frontend 
if (env.NODE_ENV === 'development') {
  app.use(webpack.middleware);
  app.use(webpack.hotMiddleware);
  app.get('/', (req, res) => {
    res.write(webpack.middleware.fileSystem.readFileSync(path.join(__dirname, 'assets/dist/index.html')));
    res.end();
  });
} else {
  app.use(express.static(__dirname + 'assets/dist'));
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}

// Handler de Erros
app.use(errorHandler);

// Start Server
module.exports = app.listen(env.PORT, () => {
  console.log(`Express is running at port [${env.PORT}]...`);
  console.log(`Enviroment: [${env.NODE_ENV}]`)
  db.connect(env);
})