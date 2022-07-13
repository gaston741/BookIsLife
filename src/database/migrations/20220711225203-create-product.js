'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false, allowNull: false,
      },
      autorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references : { // construccion de relacion
          model:{
            tableName:'autors' //tabla de referencia
          },
          key: 'id' // en su columna id

        }
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      publisherId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references : { // construccion de relacion
          model:{
            tableName:'publishers' //tabla de referencia
          },
          key: 'id' // en su columna id

        }
      },
      genreId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references : { // construccion de relacion
          model:{
            tableName:'genres' //tabla de referencia
          },
          key: 'id' // en su columna id

        }
      },
      languageId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references : { // construccion de relacion
          model:{
            tableName:'languages' //tabla de referencia
          },
          key: 'id' // en su columna id

        }
      },
      image: {
        type: Sequelize.STRING
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references : { // construccion de relacion
          model:{
            tableName:'categories' //tabla de referencia
          },
          key: 'id' // en su columna id

        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};