//**Requiero el validationResult de express-validator */
const {validationResult} = require('express-validator');
const fs = require('fs');
const path = require('path');
/* Reading the productsDataBase.json file and storing it in the products variable. */
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const readBooks = () => {

    const products = JSON.parse(fs.readFileSync(productsFilePath,'utf-8'));
    return products
}
const saveBooks = (products) => fs.writeFileSync(productsFilePath, JSON.stringify(products,null,3));
const toThousand = n => n.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
module.exports={
    index: (req, res) => {
		let products = readBooks()
	    return res.render('products',{
		products,
		toThousand
	    })
	},
    detail: (req,res)=>{
        const product = readBooks().find(product=> product.id === +req.params.id);
        return res.render('productDetail',{
            product,
            toThousand
        })
    }, 
    
    create:(req,res)=>{
        return  res.render('productCreate')
    },
    store :(req,res)=>{

        const errors = validationResult(req);
        if(errors.isEmpty()){
            let products = readBooks()

            const {name,autor,price,description,publisher,genre,language, image,category}=req.body;
            const ultimo = products[products.length - 1]
            let newBook = {
                id: ultimo.id + 1, //obtengo el ultimo id y le sumo uno.
                name : name.trim(),
                autor: autor.trim(),
                price: +price,
                description: description.trim(),
                publisher: publisher.trim(),
                genre: genre,
                language: language,
                image: req.file ? req.file.filename : "default.png", // si recibo el achivo de req.file, guardo la propiedad filename, sino devolvemos la img por defecto.
                category:category
    
            }
    
            products.push(newBook); 
            saveBooks(products)
            return res.redirect('/products')

        }else{

            /* Returning the productCreate view with the errors mapped. */
            return res.render ('productCreate',{
                errors: errors.mapped(),
                old : req.body
            })
        }
       

       
    },
    edit: (req,res)=>{
        let products = readBooks();
        let product = products.find(product => product.id === +req.params.id)
        return res.render('productEdit',{
        product
    })
    },
    update: (req,res)=>{

        const errors = validationResult(req);
        if(errors.isEmpty()){
            let products = readBooks();
            const { id } = req.params;
            const {name,autor,price,description,publisher,genre,language,image,category,} = req.body;
            const booksModified = products.map((product) => {
              if (product.id === +id) {
                let bookModified = {
                  ...product,
                  name: name.trim(),
                  autor: autor.trim(),
                  price: +price,
                  description: description.trim(),
                  publisher: publisher.trim(),
                  genre: genre,
                  language: language,
                  image: req.file ? req.file.filename : "default.png", // si recibo el achivo de req.file, guardo la propiedad filename, sino devolvemos la img por defecto.
                  category: category,
                };
                return bookModified;
              }
              return product;
            });
            saveBooks(booksModified);
            return res.redirect('/products');
        }else {
            return res.render('productEdit',{
                product : req.body,
                errors : errors.mapped(),
            })
        }
    },
    destroy : (req,res)=>{
        let products = readBooks();

        const booksModified = products.filter(product => product.id !== +req.params.id)

        saveBooks(booksModified);
        return res.redirect('/products');
    },
    
    cart: (req,res)=>{
        return res.render('productCart')
    },
}