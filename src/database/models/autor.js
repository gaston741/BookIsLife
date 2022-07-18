'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Autor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Autor.hasMany(models.Product,{
        as : 'products', // como se llama la asosiacion, atributo que contiene un array con los productos asociados a cierto autor
        foreignKey :'autorId' // a traves de autorId
      })

    }
  }
  Autor.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Autor',
  });
  return Autor;
};