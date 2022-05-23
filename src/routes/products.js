const express = require('express');
const router = express.Router();
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
        callback (null, `${Date.now()}_products_${path.extname(file.originalname)}`)

    }
})
const upload = multer({
    storage
})




//**************RUTAS********** */
/* Mostrar  todos los productos*/
router.get('/',index);

/* Crear un producto  */
router.get('/create', create);
router.post('/create',upload.single('image'), store);

/* Mostrar un producto especifico*/
router.get('/detail/:id', detail);

/* Editar un producto */
router.get('/edit/:id', edit);
router.put('/update/:id', update);

/* Carrito de compras */
router.get('/cart', cart);

/* Eliminar un producto */
router.delete('/delete/:id', destroy);



module.exports = router;
