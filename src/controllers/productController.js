const { Op } = require('sequelize');
const { Product, Genre, Publisher, Autor,Category,Language } = require('../database/models'); /* Utilizo Base de Datos para traer el Model Product */
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
               res.render('products',{
                    products,
                    genres
            })
	    })
        .catch(errors => console.log(errors))
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
            .catch(errors => console.log(errors))
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
        let genres = Genre.findAll();
        let publishers = Publisher.findAll();
        let categories = Category.findAll();
        let languages = Language.findAll();
        let autors = Autor.findAll();

        Promise.all([genres,publishers, languages, categories, autors])
        .then(([genres,publishers, languages, categories, autors]) => {
            return res.render('productCreate',{
                genres,
                publishers,
                autors,
                languages,
                categories
            })
        })
        .catch(errors => console.log(errors))
    },

    store : (req,res) => {
        
        Product.create(
            {    
                ...req.body,
                image : req.file ? req.file.filename : "default.png"
            })
        .then(() => {
            return res.redirect('/products')
        })
        .catch(errors => console.log(errors))
    },

    edit : (req,res) => {

        let product = Product.findByPk(req.params.id)
        let genres = Genre.findAll();
        let publishers = Publisher.findAll();
        let categories = Category.findAll();
        let languages = Language.findAll();
        let autors = Autor.findAll();

        Promise.all([product, genres,publishers, languages, categories, autors])
        .then(([product, genres,publishers, languages, categories, autors]) => {
            return res.render('productEdit',{
                genres,
                publishers,
                autors,
                languages,
                categories,
                product
            })
        })
      .catch(errors => console.log(errors))
    },

    update : async(req,res) => {

        let product = await Product.findByPk(req.params.id)

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
