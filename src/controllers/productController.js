const fs = require('fs');
const path = require('path');

/* Reading the productsDataBase.json file and storing it in the products variable. */

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const genero = require('../data/productsDataBase.json')

const readProducts = () => {
    const products = JSON.parse(fs.readFileSync(productsFilePath,'utf-8'))
    return products
}

const saveProducts = (products) => fs.writeFileSync(productsFilePath, JSON.stringify(products,null,3));

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

    detail: (req,res)=>{

        const product = readProducts().find(product=> product.id === +req.params.id);
        return res.render('productDetail',{

            product,
            toThousand
        })
    }, 
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
    create:(req,res)=>{
        return  res.render('productCreate',{
            genero,
        })
    },
    store :(req,res)=>{
        let products = readProducts();

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

        return res.redirect('/products')
    },
    destroy : (req,res)=>{

        let products = readProducts();

        const {id} = req.params;

        const productsFilter = products.filter(product => product.id !== +id);
        saveProducts(productsFilter);
        return res.redirect('/products')
    },

}