const Sequelize = require('sequelize');
'use strict';
const bcryptjs = require('bcryptjs');
const users = [
  {
    name: "admin",
    surname : "admin",
    email : "admin@gmail.com",
    password : bcryptjs.hashSync("123123",10),
    rolId : 1,
    createdAt: new Date(),
  },
  {
    name: "Gaston",
    surname : "Rodriguez",
    email : "gaston@gmail.com",
    password : bcryptjs.hashSync("123123",10),
    rolId : 2,
    createdAt: new Date(),
  },
  {
    name: "Juan",
    surname : "Roldan",
    email : "juan@gmail.com",
    password : bcryptjs.hashSync("123123",10),
    rolId : 2,
    createdAt: new Date(),
  },
  {
    name: "Adriel",
    surname : "Coria",
    email : "adrielcoria1914@gmail.com",
    password : bcryptjs.hashSync("123123",10),
    rolId : 2,
    createdAt: new Date(),
  },
  {
    name: "Luisa",
    surname : "Morales",
    email : "luisa@gmail.com",
    password : bcryptjs.hashSync("123123",10),
    rolId : 2,
    createdAt: new Date(),
  },
];

module.exports = {
  async up(queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert("Users",users, {});
    
  },

  async down(queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete("Users", null, {});
     
  }
};


