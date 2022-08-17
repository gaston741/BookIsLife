const Sequelize = require('sequelize');
'use strict';

const genres = [
  {
    name: "Autoayuda",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Autobiografia",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Clásicos",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Ciencia Ficción",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Cómics y Mangas",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Narrativa",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Narrativa Romantica",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Management",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Obras de Teatro",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Poesía",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Policiales",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Terror",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

module.exports = {
  async up(queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert("Genres", genres , {});
    
  },

  async down(queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete("Genres", null, {});
    
  }
};
