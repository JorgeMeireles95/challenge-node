const { Router } = require('express');

const TutoresController = require('../controllers/Tutorescontroller');

const routerTutores = Router();
routerTutores.get('/tutores', TutoresController.pegaTodosOsTutores);
routerTutores.get('/tutorId/:id', TutoresController.pegaUmTutor);
routerTutores.post('/tutor', TutoresController.criaTutor);
routerTutores.put('/tutorAtualizaId/:id', TutoresController.atualizaTutor);
routerTutores.delete('/tutorExcluir/:id', TutoresController.apagaTutor);
module.exports = routerTutores;
