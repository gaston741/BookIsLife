'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Rol,{ // el modelo pertenece a 
        as : 'rol', // como se llama la asosiacion, atributo que contiene un array con asociados  
        foreignKey :'rolId' // a traves de 
      })
    }
  }
  User.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    rolId: DataTypes.INTEGER,
    avatar: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};