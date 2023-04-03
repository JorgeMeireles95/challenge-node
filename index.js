const express = require('express');
const routerTutores = require('./api/routes/tutoresRoute');
require('dotenv').config();

const porta = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routerTutores);
app.listen(porta, () => {
  // eslint-disable-next-line no-console
  console.log(`Servidor rodando na porta ${porta}`);
});
