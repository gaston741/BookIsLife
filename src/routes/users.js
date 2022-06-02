const express = require('express');
const router = express.Router();

//***Controller Require */
const {register, login, processRegister,processLogin} = require ('../controllers/userController');

//********Validator require */
const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator')
/* GET users listing.  /users */

router.get('/register', register);
router.post('/register',registerValidator, processRegister);
router.get('/login', login);
router.post('/login', loginValidator, processLogin)



module.exports = router;
