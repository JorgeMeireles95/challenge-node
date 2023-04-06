const express = require('express');
const tutores = require('./tutoresRoute');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(tutores);

module.exports = app;
