const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath,'utf-8'))

const toThousand = n => n.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


module.exports={
    index: (req, res) =>{
      return   res.render('index',{
        products
      })
    },
    search: (req,res)=>{

      const {keywords} = req.query;

      let result = products.filter(product => product.name.toLowerCase().includes(keywords.toLowerCase() || product.autor.toLowerCase().includes(keywords.toLowerCase()) ))

      return res.send(result)
    }


}