'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
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
      surname: {
        type : Sequelize.STRING,
        allowNull : false
      },
      email: {
        type : Sequelize.STRING,
        allowNull : false
      },
      password: {
        type : Sequelize.STRING,
        allowNull : false
      },
      avatar: {
        type : Sequelize.STRING
      },
      rolId: {
        allowNull : false,
        type : Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'rols'
          },
          key : 'id'
        }
      },
      date: {
        type : Sequelize.DATE
      },
      tel: {
        type : Sequelize.INTEGER
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
    await queryInterface.dropTable('Users');
  }
};