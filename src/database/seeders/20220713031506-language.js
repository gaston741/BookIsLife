const Sequelize = require('sequelize');
'use strict';
const languages = [
  
  {
    name: "español",
    createdAt: new Date(),
    
  },
  {
    name: "ingles",
    createdAt: new Date(),
    
  },
];

module.exports = {
  async up(queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert("Languages",languages, {});
    
  },

  async down(queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete("Languages", null, {});
     
  }
};


