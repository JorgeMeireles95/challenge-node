const dotenv = require('dotenv').config();
const express = require('express');
const porta = process.env.PORT || 3000;
const app = express();


app.get('/', (req, res) => {
  res.send("Funciona")
})

app.listen(porta, () => {
console.log(`Servidor rodando na porta ${porta}`);
})
