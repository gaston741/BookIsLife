'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull : false,
        autoIncrement : true,
        primaryKey : true,
        type : Sequelize.INTEGER
      },
      name: {
        type : Sequelize.STRING,
        allowNull : false
      },
      price: {
        type : Sequelize.INTEGER,
        allowNull : false
      },
      description: {
        type : Sequelize.TEXT,
        allowNull : false
      },
      autorId: {
        allowNull : false,
        type : Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'autors'
          },
          key : 'id'
        }
      },
      publisherId: {
        allowNull : false,
        type : Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'publishers'
          },
          key : 'id'
        }
      },
      genreId: {
        allowNull : false,
        type : Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'genres'
          },
          key : 'id'
        }
      },
      languageId: {
        allowNull : false,
        type : Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'languages'
          },
          key : 'id'
        }
      },
      categoryId: {
        allowNull : false,
        type : Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'categories'
          },
          key : 'id'
        }
      },
      image : {
        type : Sequelize.STRING
      },
      createdAt: {
        allowNull : true,
        type : Sequelize.DATE
      },
      updatedAt: {
        allowNull : true,
        type : Sequelize.DATE
      },
      deletedAt: {
        allowNull : true,
        type : Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};