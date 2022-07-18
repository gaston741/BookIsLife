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
      Product.belongsTo(models.Autor,{ // el modelo pertenece a un autor
        as : 'autors', // como se llama la asosiacion, atributo que contiene un array con los productos asociados a ese autor
        foreignKey :'autorId' // a traves de autorID
      })
      Product.belongsTo(models.Publisher,{ // el modelo pertenece a una editorial
        as : 'publishers', // como se llama la asosiacion, atributo que contiene un array con los productos asociados a esa editorial
        foreignKey :'publisherId' // a traves de publisherID
      })
      Product.belongsTo(models.Genre,{ // el modelo pertenece a un genero
        as : 'genres', // como se llama la asosiacion, atributo que contiene un array con los productos asociados a ese genero
        foreignKey :'genreId' // a traves de genreID
      })
      Product.belongsTo(models.Language,{ // el modelo pertenece a un lenguaje
        as : 'languages', // como se llama la asosiacion, atributo que contiene un array con los productos asociados a ese lenguaje
        foreignKey :'languageId' // a traves de languageId
      })
      Product.belongsTo(models.Category,{ // el modelo pertenece a una categoria
        as : 'categories', // como se llama la asosiacion, atributo que contiene un array con los productos asociados a esa categoria
        foreignKey :'categoryId' // a traves de categoryID
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