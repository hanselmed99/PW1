const express = require('express');
const routes = express.Router();

//Imprimir el controlador
const personasController = require('../controllers/personasControllers');

//Rutas

//Get

routes.get('/', personasConroller.listar);

routes.get('/:id', personasController.getPersona);

//POST

routes.post('/', personasController.agregar);

//PUT
routes.put('/:id', personasController.editar);

//DELETE
routes.delete('/:id', personasController.eliminar);

module.exports = routes;