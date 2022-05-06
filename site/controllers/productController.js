module.exports={

    detail: (req,res)=> res.render('productDetail'),
    cart: (req,res)=>res.render('productCart'),
    add: (req,res)=>res.render('productsAdd'),
    edit: (req,res)=>res.render('productEdit'),
    create:(req,res)=>res.render('productCreate')

}
