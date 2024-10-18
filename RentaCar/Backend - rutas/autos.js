const express = require('express');
const router = express.Router();
const { getAutos, addAuto, updateAuto, deleteAuto } = require('../controllers/autos');

// Obtener todos los autos
router.get('/', getAutos);

// Agregar un auto
router.post('/', addAuto);

// Actualizar un auto
router.put('/:id', updateAuto);

// Eliminar un auto
router.delete('/:id', deleteAuto);

module.exports = router;
