/* eslint-disable no-unused-vars */
const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tutores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tutores.init({
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          args: true,
          msg: 'e-mail não válido',
        },
      },
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefone: DataTypes.STRING,
    cidade: DataTypes.STRING,
    sobre: DataTypes.TEXT,
    foto: DataTypes.BLOB,
  }, {
    sequelize,
    modelName: 'Tutores',
  });
  return Tutores;
};
