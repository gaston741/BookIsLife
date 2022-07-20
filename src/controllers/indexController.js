const fs = require('fs');
const path = require('path');
const { Product } = require('../database/models'); /* Utilizo Base de Datos para traer el Model Product */
const { Op } = require('sequelize');

/* Reading the json file and storing it in a variable. */
/* const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath,'utf-8')) */

const toThousand = n => n.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


module.exports={
    index: (req, res) =>{
      
      let productsInSale = Product.findAll({
        where : {
          categoryId : 1 ,
        }
    })
    let productsRelevant = Product.findAll({
        where : {
          categoryId : 2 ,
        }
    })
    Promise.all([ productsInSale , productsRelevant ])
        .then(([ productsInSale, productsRelevant]) => {
          return res.render('index',{
            productsInSale,
            productsRelevant,
            toThousand
        })
      })
        .catch(error => console.log(error))
    },
    
    search: (req,res) => {

      const {keywords} = req.query;

        Product.findAll({
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
          }
        }).then(result => {
          return res.render('results',{
            result,
            keywords
          })
        }).catch(error => console.log(error))
/*       let result = products.filter(product => product.name.toLowerCase().includes(keywords.toLowerCase() || product.autor.toLowerCase().includes(keywords.toLowerCase()) ))

      return res.render('results',{

        result,
        keywords


      }) */
    },
    admin : (req,res)=>{
      return res.render('admin',{
        products,
        toThousand
      })
    }


}