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
