const express = require('express');
const { Profesor, Alumno } = require('./models');

const router = express.Router();

//Encontrar todos los profesores
router.get('/profesores', (req, res) => {
    Profesor.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

// Encontrar todos los alumnos
router.get('/alumnos', (req, res) => {
    Alumno.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

// Encontrar profesor específico
router.get('/profesores/:id', (req, res) => {
    Profesor.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

// Encontrar alumno específico
router.get('/alumnos/:id', (req, res) => {
    Alumno.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

// Insertar profesor
router.post('/profesores', (req, res) => {
    const profesor = new Profesor({
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        edad: req.body.edad,
        dni: req.body.dni,
        especialidad: req.body.especialidad
    });
    profesor.save((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
})

// Insertar alumno
router.post('/alumnos', (req, res) => {
    const alumno = new Alumno({
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        edad: req.body.edad,
        dni: req.body.dni,
        notaMedia: req.body.notaMedia
    });
    alumno.save((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
})

// Modificar un profesor
router.put('/profesores/:id', (req, res) => {
    Profesor.findOneAndUpdate(
        { _id: req.params.id },
        {
            $set: {
                nombre: req.body.nombre, apellidos: req.body.apellidos,
                edad: req.body.edad, dni: req.body.dni, especialidad: req.body.especialidad
            }
        },
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        });
});

// Modificar un alumno
router.put('/alumnos/:id', (req, res) => {
    Alumno.findOneAndUpdate(
        { _id: req.params.id },
        {
            $set: {
                nombre: req.body.nombre, apellidos: req.body.apellidos,
                edad: req.body.edad, dni: req.body.dni, notaMedia: req.body.notaMedia
            }
        },
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        });
});

// Borrar un profesor

router.delete('/profesores/:id', (req, res) => {
    Profesor.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

// Borrar un alumno

router.delete('/alumnos/:id', (req, res) => {
    Alumno.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

module.exports = router;