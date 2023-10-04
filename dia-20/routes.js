const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const alunosController = require('./src/controllers/alunosController');

route.get('/', homeController.index);

route.get('/alunos/register' , alunosController.index);

route.post('/alunos', alunosController.store);

module.exports = route;
