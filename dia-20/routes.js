const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const alunosController = require('./src/controllers/alunosController');

route.get('/', homeController.index);

route.post('/alunos', alunosController.store);
route.get('/alunos/register' , alunosController.show);
route.post('/alunos/list' , alunosController.index);



module.exports = route;
