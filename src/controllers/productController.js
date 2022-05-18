const fs = require('fs');
const path = require('path');

/* Reading the productsDataBase.json file and storing it in the products variable. */
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath,'utf-8'))

const toThousand = n => n.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


module.exports={

    detail: (req,res)=>{

        const product = products.find(product=> product.id === +req.params.id);
        return res.render('productDetail',{

            product,
            toThousand
        })
    }, 
    cart: (req,res)=>{
        return res.render('productCart')
    },
    edit: (req,res)=>{
       return res.render('productEdit')

    },
    update: (req,res)=>{

    },
    create:(req,res)=>{
        return  res.render('productCreate')
    },
    store :(req,res)=>{


    },
    destroy : (req,res)=>{


    }

}
