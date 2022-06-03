const fs = require('fs');
const path = require('path');

/* Reading the json file and storing it in a variable. */
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath,'utf-8'))

const toThousand = n => n.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


module.exports={
    index: (req, res) =>{
      console.log (req.session.userLogin)

      let productsInSale = products.filter(product => product.category === "in-sale");
      let productsRelevant = products.filter(product => product.category === "relevant");

      return res.render('index',{
        products, //mando al inicio los libros agregados tambien
        productsInSale,
        productsRelevant,
        toThousand
      })
    },
    
    search: (req,res)=>{

      const {keywords} = req.query;

      let result = products.filter(product => product.name.toLowerCase().includes(keywords.toLowerCase() || product.autor.toLowerCase().includes(keywords.toLowerCase()) ))

      return res.render('results',{

        result,
        keywords


      })
    }


}