
const Sequelize = require('sequelize');
'use strict';
const autors= [
  
  {
    name: "Stephen King",
    createdAt: new Date(),
    
  },
  {
    name: "Alice Kellen",
    createdAt: new Date(),
    
  },
  {
    name: "De Saint Exupéry Antoine",
    createdAt: new Date(),
    
  },
  {
    name: "Akame Tamura",
    createdAt: new Date(),
    
  },
  {
    name: "Walter Tevis",
    createdAt: new Date(),
    
  },
  {
    name: "Carlos Ruiz Zafón",
    createdAt: new Date(),
    
  },
  {
    name: "George Orwell",
    createdAt: new Date(),
    
  },
  {
    name: "Ana Frank",
    createdAt: new Date(),
    
  },
  {
    name: "John Katzenbach",
    createdAt: new Date(),
    
  },
  {
    name: "Dr. Miguel Ruiz",
    createdAt: new Date(),
    
  },
  {
    name: "Victor Frankl",
    createdAt: new Date(),
    
  },
  {
    name: "Robin Sharma",
    createdAt: new Date(),
    
  },
  {
    name: "Gabriel García Márquez",
    createdAt: new Date(),
    
  },
  {
    name: "John Grisham",
    createdAt: new Date(),
    
  },
  {
    name: "Nio Kakatani",
    createdAt: new Date(),
    
  },
  {
    name: "Truman Capote",
    createdAt: new Date(),
    
  },
  {
    name: "J.K. Rowling",
    createdAt: new Date(),
    
  },
  {
    name: "Fiodor Dostoyevsky",
    createdAt: new Date(),
    
  },
  {
    name: "Louisa May Alcott",
    createdAt: new Date(),
    
  },
  {
    name: "Taylor Jenkins Reid",
    createdAt: new Date(),
    
  },
  {
    name: "Robert T. Kiyosaki",
    createdAt: new Date(),
    
  },
  {
    name: "Eckhart Tolle",
    createdAt: new Date(),
    
  },
  {
    name: "Megan Maxwell",
    createdAt: new Date(),
    
  },
  {
    name: "Julio Cortázar",
    createdAt: new Date(),
    
  },
  {
    name: "Isabel Allende",
    createdAt: new Date(),
    
  },
  {
    name: "Mary Higgins Clark",
    createdAt: new Date(),
    
  },
  {
    name: "Alfonsina Storni",
    createdAt: new Date(),
    
  },
  {
    name: "José Ignacio Serralunga",
    createdAt: new Date(),
    
  },
  {
    name: "Homero",
    createdAt: new Date(),
    
  },
  {
    name: "Eger Edhit Eva",
    createdAt: new Date(),
    
  },
];

module.exports = {
  async up(queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert("Autors",autors, {});
    
  },

  async down(queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete("Autors", null, {});
     
  }
};
