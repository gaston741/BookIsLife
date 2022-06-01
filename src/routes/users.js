const express = require('express');
const router = express.Router();

const {register, login, processRegister} = require ('../controllers/userController')

/* GET users listing.  /users */

router.get('/register', register);
router.post('/register', processRegister)
router.get('/login', login);



module.exports = router;
