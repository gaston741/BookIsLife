const fs = require('fs');
const path = require('path');
/* Reading the productsDataBase.json file and storing it in the products variable. */

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
<<<<<<< HEAD
const genero = require('../data/productsDataBase.json')

const readProducts = () => {
    const products = JSON.parse(fs.readFileSync(productsFilePath,'utf-8'))
    return products
}

const saveProducts = (products) => fs.writeFileSync(productsFilePath, JSON.stringify(products,null,3));
=======


const readBooks = () => {
   
    const products = JSON.parse(fs.readFileSync(productsFilePath,'utf-8'));
    return products
}
const saveBooks = (products) => fs.writeFileSync(productsFilePath, JSON.stringify(products,null,3));
>>>>>>> 441d7fefb0bf83173fa8893ec8f72e78756f1f9f

const toThousand = n => n.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
    index : (req,res) => {
        let products = readProducts()
        return re.render('products',{
            products,
            toThousand
        })
    }
}
module.exports={

    index: (req, res) => {

		let products = readBooks()

	    return res.render('products',{
		 products,
		 toThousand

	    })
	},

    detail: (req,res)=>{
       

<<<<<<< HEAD
        const product = readProducts().find(product=> product.id === +req.params.id);
=======
        const product = readBooks().find(product=> product.id === +req.params.id);
>>>>>>> 441d7fefb0bf83173fa8893ec8f72e78756f1f9f
        return res.render('productDetail',{
            product,
            toThousand
        })
    }, 
<<<<<<< HEAD
    cart: (req,res)=>{
        return res.render('productCart')
    },
    edit: (req,res)=>{
        let products = readProducts();

        const {id} = req.params;
        
        const product = products.find(product=> product.id === +id);

        return res.render('productEdit', {
            genero,
            product
        })

    },
    update: (req,res)=>{
        let products = readProducts();

        const {id} = req.params;
        const {name, autor, price, description, publisher, genero, language, stock, image, ISBN} = req.body;

        const productsModify = products.map(product => {
            if(product.id === +id){
                let productModify ={
                    ...product,
                    name,
                    autor,
                    price: +price,
                    description,
                    publisher,
                    genero,
                    language,
                    stock,
                    image,
                    ISBN,
                }
                return productModify
            }
            return product
        })
        
        fs.writeFileSync(path.resolve(__dirname,'..','data','productsDataBase.json'),JSON.stringify(productsModify,null,3),'utf-8')

        return res.redirect('/')
    },
=======
    
>>>>>>> 441d7fefb0bf83173fa8893ec8f72e78756f1f9f
    create:(req,res)=>{
        return  res.render('productCreate',{
            genero,
        })
    },

    store :(req,res)=>{
        let products = readProducts();

<<<<<<< HEAD
        const {name, autor, price, description, publisher, genero, language, stock, image, ISBN} = req.body;

        let lastID = products[products.length - 1].id;

        let newProduct = {
            id : +lastID + 1,
            name : name.trim(),
            autor : autor.trim(),
            price : +price,
            description : description.trim(),
            publisher : publisher.trim(),
            genero,
            language,
            stock : +stock,
            image,
            ISBN,
        }
        products.push(newProduct);
        saveProducts(products);

=======
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
>>>>>>> 441d7fefb0bf83173fa8893ec8f72e78756f1f9f
        return res.redirect('/products')
    },

    edit: (req,res)=>{
        let products = readBooks();
       let product = products.find(product => product.id === +req.params.id)
       return res.render('productEdit',{
         product

       })
    },

    update: (req,res)=>{

        let products = readBooks();
        const {name,autor,price,description,publisher,genre,language,image,category} = req.body;
         const booksModified = products.map(product => {
            if(product.id === +req.params.id){
               let bookModified = {
                   ...product,
                   name: name.trim(),
                   autor: autor.trim(),
                   price : +price,
                   description :description.trim(),
                   publisher: publisher,
                   genre :genre,
                   language:language,
                   image: req.file ? req.file.filename : "default.png", // si recibo el achivo de req.file, guardo la propiedad filename, sino devolvemos la img por defecto.
                   category:category
               }
               return bookModified
            }
            return product
        })
        saveBooks(booksModified)
        return res.redirect('/products')
    },

    destroy : (req,res)=>{

<<<<<<< HEAD
        let products = readProducts();

        const {id} = req.params;
=======
        let products = readBooks();
        const booksModified = products.filter(product => product.id !== +req.params.id)

        saveBooks(booksModified);
        return res.redirect('/products');

    },
    
    cart: (req,res)=>{
        return res.render('productCart')
    },
>>>>>>> 441d7fefb0bf83173fa8893ec8f72e78756f1f9f

        const productsFilter = products.filter(product => product.id !== +id);
        saveProducts(productsFilter);
        return res.redirect('/products')
    },

}