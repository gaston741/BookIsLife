const express = require('express');
const router = express.Router();

//***Controller Require */
const {register, login, processRegister} = require ('../controllers/userController');

//********Validator require */
const registerValidator = require('../validations/registerValidator');

/* GET users listing.  /users */

router.get('/register', register);
router.post('/register',registerValidator, processRegister);
router.get('/login', login);



module.exports = router;
