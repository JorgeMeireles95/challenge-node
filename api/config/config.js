require('dotenv').config(); // carrega as variáveis de ambiente do arquivo .env

const db_username = process.env.DB_USERNAME;
const db_password = process.env.DB_PASSWORD;
const db_host = process.env.DB_HOST;
const db_name = process.env.DB_NAME;
const db_dialect = process.env.DB_DIALECT;

const dbConfig = {
  "development": {
    "username": db_username,
    "password": db_password,
    "database": db_name,
    "host": db_host,
    "dialect": db_dialect
  },
  "test": {
    "username": db_username,
    "password": db_password,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": db_username,
    "password": db_password,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
};

module.exports = dbConfig;