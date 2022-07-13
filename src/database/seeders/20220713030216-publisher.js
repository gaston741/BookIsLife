const Sequelize = require('sequelize');
'use strict';
const publishers = [
  
  {
    name: "Signet Books",
    createdAt: new Date(),
    
  },
  {
    name: "Planeta",
    createdAt: new Date(),
    
  },
  {
    name: "Catapulta",
    createdAt: new Date(),
    
  },
  {
    name: "Kitsune Books",
    createdAt: new Date(),
    
  },
  {
    name: "Alfaguara",
    createdAt: new Date(),
    
  },
  {
    name: "Booket",
    createdAt: new Date(),
    
  },
  {
    name: "Debolsillo",
    createdAt: new Date(),
    
  },
  {
    name: "Prometeo Libros",
    createdAt: new Date(),
    
  },
  {
    name: "Ediciones B",
    createdAt: new Date(),
    
  },
  {
    name: "Urano",
    createdAt: new Date(),
    
  },
  {
    name: "Herder",
    createdAt: new Date(),
    
  },
  {
    name: "Panini Comics Argentina",
    createdAt: new Date(),
    
  },
  {
    name: "Lumen",
    createdAt: new Date(),
    
  },
  {
    name: "Salamandra",
    createdAt: new Date(),
    
  },
  {
    name: "Edaf",
    createdAt: new Date(),
    
  },
  {
    name: "Plaza & Janes Editores",
    createdAt: new Date(),
    
  },
  {
    name: "Umbriel",
    createdAt: new Date(),
    
  },
  {
    name: "Gaia Ediciones",
    createdAt: new Date(),
    
  },
  {
    name: "Sudamericana",
    createdAt: new Date(),
    
  },
  {
    name: "Terramar",
    createdAt: new Date(),
    
  },
  {
    name: "Universidad Católica De Santa Fe",
    createdAt: new Date(),
    
  },
  {
    name: "Blackie Books",
    createdAt: new Date(),
    
  }
];

module.exports = {
  async up(queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert("Publishers", publishers, {});
    
  },

  async down(queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete("Publishers", null, {});
     
  }
};

