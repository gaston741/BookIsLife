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
    destroy : (req,res)=>{


    }

}
