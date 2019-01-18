const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://localhost:27017/ies', { useNewUrlParser: true })
    .then(db => console.log('Conexión corrmodelscta a la BD'))
    .catch(err => console.log('Error en la conexión a la BD'));


// MIDDLEWARE
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use(express.json());
app.use ('/api', routes);

app.listen(3000, () => {
    console.log('Iniciando servidor en puerto 3000');
});