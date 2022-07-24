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
      Product.belongsTo(models.Category,{
        as : 'category',
        foreignKey : 'categoryId'
      });

      Product.belongsTo(models.Genre,{
        as : 'genre',
        foreignKey : 'genreId'
      });

      Product.belongsTo(models.Autor,{
        as : 'autor',
        foreignKey : 'autorId'
      });

      Product.belongsTo(models.Publisher,{
        as : 'publisher',
        foreignKey : 'publisherId'
      });

      Product.belongsTo(models.Language,{
        as : 'language',
        foreignKey : 'languageId'
      });
    }
  }
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING(500),
    autorId: DataTypes.INTEGER,
    publisherId: DataTypes.INTEGER,
    genreId: DataTypes.INTEGER,
    languageId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    image : DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};