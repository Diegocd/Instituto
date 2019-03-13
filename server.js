const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');
const routes = require('./routes');
const config = require('./config');
const app = express();

mongoose.connect(config.db_uri, { useNewUrlParser: true })
    .then(db => console.log('Conexión corrmodelscta a la BD'))
    .catch(err => console.log('Error en la conexión a la BD'));

// --- MIDDLEWARE
// Para redirigir trafico HTTP a HTTPS
app.use((req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https')
      res.redirect(`https://${req.header('host')}${req.url}`);
    else
      next();
  });

// MIDDLEWARE
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use(express.json());
app.use ('/api', routes);

app.listen(config.port, () => {
    console.log('Iniciando servidor en puerto 3000');
});
