const { Op } = require('sequelize');
const { Product, Genre } = require('../database/models'); /* Utilizo Base de Datos para traer el Model Product */
const fs = require('fs');
const path = require('path');
const toThousand = n => n.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
    index : (req, res) => {
    let genres = Genre.findAll();
		let products = Product.findAll({
            include : ['category','autor']
        })
        Promise.all([genres,products])
            .then(([genres,products]) => {
/*                 return res.send(products)
 */                res.render('products',{
                    products,
                    genres
            })
	    })
        .catch(error => console.log(error))
	},

    detail : (req,res) => {
        let genres = Genre.findAll()
        let product = Product.findByPk(req.params.id)
        Promise.all([genres, product])
            .then(([genres,product]) => {
                return res.render('productDetail',{
                    product,
                    genres,
                    toThousand
            })
        })
            .catch(error => console.log(error))
    }, 

    filter : (req,res) => {
        let genres = Genre.findAll()
        let products = Product.findAll({
            where : {
                genreId : req.query.genre
            },
            include : ['autor']
        })
        let genre = Genre.findByPk(req.query.genre)

        Promise.all([genres,products, genre])
            .then(([genres,products, genre]) => {
                return res.render('products',{
                    products,
                    genres,
                    genre
                })
            })
    },
    
    create : (req,res) => {
        Product.findAll()
        .then(product => {
            return res.render('productCreate', {
                product
            })
        })
        .catch(errors => console.log(errors))
    },

    store : (req,res) => {
        return res.send(req.body)
    const {} = req.body;

        Product.create(
            {
                ...req.body,
                image : req.file ? req.file.filename : "default.png"
            }/* {
            name : name,
            autorId : +autorId,
            price : +price,
            description : description,
            publisherId: +publisherId,
            genreId : +genreId,
            languageId : +languageId,
            image : req.file ? req.file.filename : "default.png", // si recibo el achivo de req.file, guardo la propiedad filename, sino devolvemos la img por defecto.,
            categoryId : +categoryId,
        } */ )
        .then(product => {
            return res.redirect('/products')
        })
        .catch(error => console.log(error))
    },

    edit : (req,res) => {

        Product.findByPk(req.params.id)
            .then(product => {
                return res.render('productEdit',{
                    product
                })
            })
            .catch(errors => console.log(errors))
    },

    update : (req,res) => {

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

    destroy : (req,res) => {

        Product.destroy(
            {
                where : { id : req.params.id},
                force : true
            })
            .then(() => {
                return res.redirect('/products');
            })
            .catch(errors => console.log(errors))
    },
    
    cart : (req,res) => {
        
        return res.render('productCart')
    },

}
