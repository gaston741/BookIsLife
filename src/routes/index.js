const express = require('express');
const router = express.Router();

const {index, search,admin,questions}=require('../controllers/indexController')
 //**Middleware require */
const checkAdmin = require('../middlewares/checkAdmin');
router.get('/questions',questions)
/* GET home page. */
router.get('/', index);

/* Buscador */
router.get('/search',search)

//**Administrador */
.get('/admin', checkAdmin, admin)


module.exports = router;
