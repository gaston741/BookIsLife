'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category,{ // el modelo pertenece a una categoria
        as : 'category', // como se llama la asosiacion, atributo que contiene un array con los productos asociados a esa categoria
        foreignKey :'categoryId' // a traves de categoryID
      })
      Product.belongsTo(models.Autor,{ // el modelo pertenece a un autor
        as : 'autor', // como se llama la asosiacion, atributo que contiene un array con los productos asociados a ese autor
        foreignKey :'autorId' // a traves de autorID
      })
    }
  }
  Product.init({
    name: DataTypes.STRING,
    autorId: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    publisherId: DataTypes.INTEGER,
    genreId: DataTypes.INTEGER,
    languageId: DataTypes.INTEGER,
    image: DataTypes.STRING,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};