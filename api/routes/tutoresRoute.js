const { Router } = require('express');

const TutoresController = require('../controllers/Tutorescontroller');

const routerTutores = Router();

routerTutores.get('/tutores', TutoresController.pegaTodosOsTutores);
routerTutores.get('/tutor/:id', TutoresController.pegaUmTutor);
routerTutores.post('/tutor', TutoresController.criaTutor);
routerTutores.put('/tutor/:id', TutoresController.atualizaTutor);
routerTutores.delete('/tutor/:id', TutoresController.apagaTutor);

module.exports = routerTutores;
