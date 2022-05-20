const fs = require('fs');
const path = require('path');

module.exports={

    detail: (req,res)=>{
        return res.render('productDetail')
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
    remove : (req,res)=>{
        const {id} = req.params;

        const productsFilter = products.filter(product => product.id !== +id);

        fs.writeFileSync(path.resolve(__dirname,'..','data','productsDataBase.json'),JSON.stringify(productsFilter,null,3),'utf-8')

        return res.redirect('/')
    },

}
