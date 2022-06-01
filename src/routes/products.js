const express = require('express');
const router = express.Router();
const upload =require ('../middlewares/uploadProductsImage')


//***Requerimos el validador*/

const productValidator = require('../validations/productValidator')

//requerimos controlador//
const {index,detail,cart,edit,create,store,destroy,update} =require('../controllers/productController')
 




//**************RUTAS********** */
/* Mostrar  todos los productos*/
router.get('/',index);

/* Crear un producto  */
router.get('/create', create);
router.post('/create',upload.single('image'),productValidator, store);

/* Mostrar un producto especifico*/
router.get('/detail/:id', detail);

/* Editar un producto */
router.get('/edit/:id', edit);
router.put('/update/:id',upload.single('image'),productValidator, update);

/* Carrito de compras */
router.get('/cart', cart);

/* Eliminar un producto */
router.delete('/delete/:id', destroy);



module.exports = router;
