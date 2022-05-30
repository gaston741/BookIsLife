const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const multer = require('multer');

const{index} = require('../controllers/indexController');
const {detail,cart,edit,create,store,update,destroy} =require('../controllers/productController')

/*MULTER */
 const storage = multer.diskStorage({
     destination : (req,file,callback) => {
         callback(null,'public/images')
     },
     filename : (req,file,callback) => {
         callback(null,'prueba.png')
     }
 })
 const upload = multer({
     storage
 })

/* Mostrar todos los productos */
=======
const path = require ('path')
//requerimos multer para manipular img files en el form//
const multer =require('multer');

//requerimos controlador//
const {index,detail,cart,edit,create,store,destroy,update} =require('../controllers/productController')
 
//configuracion de multer//
const storage =multer.diskStorage({

    destination : function( req, file, callback){
        callback( null, 'public/images/portadas')
    },
    filename : function (req,file,callback){
        callback (null, `${Date.now()}_products_${path.extname(file.originalname)}`) // seteo como quiero guardar el nombre original del producto.

    }
})
const upload = multer({
    storage
})




//**************RUTAS********** */
/* Mostrar  todos los productos*/
>>>>>>> 441d7fefb0bf83173fa8893ec8f72e78756f1f9f
router.get('/',index);

/* Crear un producto  */
router.get('/create', create);
<<<<<<< HEAD
router.post('/create', upload.single('image'), store);
=======
router.post('/create',upload.single('image'), store);
>>>>>>> 441d7fefb0bf83173fa8893ec8f72e78756f1f9f

/* Mostrar un producto especifico*/
router.get('/detail/:id', detail);

/* Editar un producto */
router.get('/edit/:id', edit);
<<<<<<< HEAD
router.put('/update/:id', update);
=======
router.put('/update/:id',upload.single('image'), update);
>>>>>>> 441d7fefb0bf83173fa8893ec8f72e78756f1f9f

/* Carrito de compras */
router.get('/cart', cart);

/* Eliminar un producto */
router.delete('/delete/:id', destroy);



module.exports = router;
