const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./document/swagger.json');
const app = require('./routes/index');
// rota para documentação
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;
