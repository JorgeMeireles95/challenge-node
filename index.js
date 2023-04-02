const dotenv = require('dotenv').config();
const express = require('express');
const tutoresRouter = require('./api/routes/tutoresRoute.js');
const porta = process.env.PORT || 3000;
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(tutoresRouter)


app.listen(porta, () => {
console.log(`Servidor rodando na porta ${porta}`);
})
