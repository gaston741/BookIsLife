const { Op } = require('sequelize');
const { Product } = require('../database/models'); /* Utilizo Base de Datos para traer el Model Product */
const fs = require('fs');
const path = require('path');
const toThousand = n => n.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
 /* Reading the productsDataBase.json file and storing it in the products variable. */
/* const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
 */

/*  const readBooks = () => {
    const products = JSON.parse(fs.readFileSync(productsFilePath,'utf-8'));
    return products
}
const saveBooks = (products) => fs.writeFileSync(productsFilePath, JSON.stringify(products,null,3));
 */ 

module.exports = {
    index: (req, res) => {

		Product.findAll()
            .then(products => {
                res.render('products',{
                    products,
            })
	    })
        .catch(error => console.log(error))
	},

    detail: (req,res)=>{

        Product.findByPk(req.params.id)
            .then(product => {
                return res.render('productDetail',{
                    product
            })
        })
            .catch(error => console.log(error))
    }, 
    
    create:(req,res)=>{
            const {name, autor, price, description, publisher, genre, language, image, category} = req.body;
        Product.create({
        /*     ...req.body,
            image : req.file ? req.file.filename : "default.png" */
            name: name.trim(),
            autor: autor.trim(),
            price: +price,
            description: description.trim(),
            publisher: publisher.trim(),
            genre: genre,
            language: language,
            image: req.file ? req.file.filename : "default.png",
            category: category
        })
        .then(product => {
            res.render('productCreate')
        })
        .catch(errors => console.log(errors))
    },

    store :(req,res)=>{

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
    },

    edit: (req,res)=>{

        Product.findByPk(req.params.id)
            .then(product => {
                return res.render('productEdit',{
                    product
                })
            })
            .catch(errors => console.log(errors))
    },

    update: (req,res)=>{

        let product = Product.findByPk(req.params.id)
        let {} = req.body;

        Product.update({
            ...req.body,
            image : req.file ? req.file.filename : product.image
        },
        {
            where : { id : req.params.id}
        })
        .then(() => {
            return res.redirect('/products')
        })
        .catch(errors => console.log(errors))
    },

    destroy : (req,res)=>{

        Product.destroy(
            {
                where : { id : req.params.id}
            })
            .then(() => {
                return res.redirect('/products');
            })
            .catch(errors => console.log(errors))
    },
    
    cart: (req,res)=>{
        
        return res.render('productCart')
    },

}
