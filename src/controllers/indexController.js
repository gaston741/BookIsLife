const fs = require('fs');
const path = require('path');
const { Product, Genre } = require('../database/models'); /* Utilizo Base de Datos para traer el Model Product */
const { Op } = require('sequelize');

const toThousand = n => n.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


module.exports={
    index: (req, res) =>{
      
      let productsInSale = Product.findAll(
        {
        where : {
          categoryId : 1
        },
        include : ['autor']
      })

      let productsRelevant = Product.findAll(
        {
        where : {
          categoryId : 2
        },
        include : ['autor']
      })

    let genres = Genre.findAll()
    Promise.all([ productsInSale , productsRelevant, genres ])
        .then(([ productsInSale, productsRelevant, genres]) => {
          return res.render('index',{
            productsInSale,
            productsRelevant,
            genres,
            toThousand
        })
      })
        .catch(error => console.log(error))
    },
    
    search: (req,res) => {

      const {keywords} = req.query;

        let result = Product.findAll({
          where : {
            [Op.or] : [
              {
                name : {
                  [Op.substring] : keywords
                }
              },
              {
                description : {
                  [Op.substring] : keywords
                }
              }
            ]
          }, 
          include : ['autor']
        })
        let genres = Genre.findAll()
        Promise.all([result,genres])
        .then(([result,genres]) => {
          return res.render('results',{
            result,
            genres,
            keywords
          })
        }).catch(error => console.log(error))
    },
    admin : (req,res)=>{
      let genres = Genre.findAll()
      let products = Product.findAll({
        include : ['category','autor','language','genre','publisher']
      })
      Promise.all([genres,products])
      .then(([genres,products]) => {
        return res.render('admin',{
          products,
          genres,
          toThousand
        })
      }).catch(error => console.log(error))
     
    },   
    questions:(req,res)=>{ 

    let genres = Genre.findAll()
    let products = Product.findAll({
      include : ['category','autor','language','genre','publisher']
    })
    Promise.all([genres,products])
    .then(([genres,products]) => {
      return res.render('questions',{
        products,
        genres,
        toThousand
      })
    }).catch(error => console.log(error))
   



  }

}