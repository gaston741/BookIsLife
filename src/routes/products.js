const express = require('express');
const router = express.Router();
const{index} = require('../controllers/indexController');
const {detail,cart,edit,create,store,destroy,update} =require('../controllers/productController')
 
/* Mostrar todos los productos */
router.get('/',index);

/* Crear un producto  */
router.get('/create', create);
router.post('/create', store);

/* Mostrar un producto especifico*/
router.get('/:id', detail);

/* Editar un producto */
router.get('/edit', edit);
router.put('/update', update);

/* Carrito de compras */
router.get('/cart', cart);

/* Eliminar un producto */
router.delete('/:id', destroy);



module.exports = router;
