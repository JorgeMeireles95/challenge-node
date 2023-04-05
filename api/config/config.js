require('dotenv').config(); // carrega as variáveis de ambiente do arquivo .env

// banco de dados desenvolvimento
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;
const dbDialect = process.env.DB_DIALECT;

// banco de dados para teste
const dbUsernameTeste = process.env.DB_USERNAME_TEST;
const dbPasswordTeste = process.env.DB_PASSWORD_TEST;
const dbNameTeste = process.env.DB_NAME_TEST;
const dbHostTeste = process.env.DB_HOST_TEST;
const dbDialectTeste = process.env.DB_DIALECT_TEST;

const dbConfig = {
  development: {
    username: dbUsername,
    password: dbPassword,
    database: dbName,
    host: dbHost,
    dialect: dbDialect,
  },
  test: {
    username: dbUsernameTeste,
    password: dbPasswordTeste,
    database: dbNameTeste,
    host: dbHostTeste,
    dialect: dbDialectTeste,
  },
  production: {
    username: dbUsername,
    password: dbPassword,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};

module.exports = dbConfig;
