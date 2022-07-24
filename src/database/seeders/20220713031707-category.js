const Sequelize = require('sequelize');
'use strict';
const categories= [
  
  {
    name: "in-sale",
    createdAt: new Date(),
    
  },
  {
    name: "relevant",
    createdAt: new Date(),
    
  },
];

module.exports = {
  async up(queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert("Categories",categories, {});
    
  },

  async down(queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete("Categories", null, {});
     
  }
};


