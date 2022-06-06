const express = require('express');
const router = express.Router();

//***UserController Require */
const {register, login, processRegister,processLogin,logout, profileEdit , updateProfile} = require ('../controllers/userController');

//********Validator require */
const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator')


//********Middleware require */
const checkUser =require('../middlewares/checkUser')

/* GET users listing */

//***to Register Form */
router.get('/register', register);
router.post('/register',registerValidator, processRegister);

//***to Login Form */
router.get('/login', login);
router.post('/login', loginValidator, processLogin);

//***to Logout  */
router.get('/logout',logout);

//***to Profile Form */
router.get('/profile',checkUser, profileEdit);
router.put('/update-profile', updateProfile)



module.exports = router;
