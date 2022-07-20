const express = require('express');
const router = express.Router();

const upload =require ('../middlewares/uploadProductsImage')

//requerimos controlador//
const { index, create, store, detail, edit, update, cart, destroy, filter } =require('../controllers/productController')

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
router.put('/update/:id',upload.single('image'), update);

/* Carrito de compras */
router.get('/cart', cart);

/* Eliminar un producto */
router.delete('/delete/:id', destroy);

/* Filtrar productos por categorias */
router.get('/filter', filter);



module.exports = router;
