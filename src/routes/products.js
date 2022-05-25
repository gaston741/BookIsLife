const express = require('express');
const router = express.Router();
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
router.get('/',index);

/* Crear un producto  */
router.get('/create', create);
router.post('/create', upload.single('image'), store);

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
