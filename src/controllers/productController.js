const { Op } = require('sequelize');
const { Product } = require('../database/models'); /* Utilizo Base de Datos para traer el Model Product */
const fs = require('fs');
const path = require('path');
const toThousand = n => n.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
    index : (req, res) => {

		Product.findAll({
            include : ['category','autor']
        })
            .then(products => {
/*                 return res.send(products)
 */                res.render('products',{
                    products,
            })
	    })
        .catch(error => console.log(error))
	},

    detail : (req,res) => {

        Product.findByPk(req.params.id)
            .then(product => {
                return res.render('productDetail',{
                    product,
                    toThousand
            })
        })
            .catch(error => console.log(error))
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

        const { name, autorId, price, description, publisherId, genreId, languageId, image, categoryId } = req.body;

        Product.create({
            name : name,
            autorId,
            price : +price,
            description : description,
            publisherId : publisherId,
            genreId : genreId,
            languageId : languageId,
            image : req.file ? req.file.filename : "default.png", // si recibo el achivo de req.file, guardo la propiedad filename, sino devolvemos la img por defecto.,
            categoryId : categoryId,
        })
        return res.send(req.body)
        .then(product => {
            if(req.files.length > 0) {
/*                 let ...
 */            }
            return res.redirect('/products')
        })
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
                where : { id : req.params.id}
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
