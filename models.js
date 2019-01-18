const mongoose = require('mongoose');

const Profesor = mongoose.model('Profesor', {
    nombre: String,
    apellidos: String,
    edad: Number,
    dni: String,
    especialidad: String
});

const Alumno = mongoose.model('Alumno', {
    nombre: String,
    apellidos: String,
    edad: Number,
    dni: String,
    notaMedia: Number
});

module.exports = { Profesor, Alumno };