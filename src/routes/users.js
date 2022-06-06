const express = require('express');
const router = express.Router();

//***UserController Require */
const {register, login, processRegister,processLogin,logout, profileEdit , updateProfile} = require ('../controllers/userController');

//********Validator require */
const registerValidator = require('../validations/registerValidator');

// middleware require  

const checkUser = require ('../middlewares/checkUser')
/* GET users listing.  /users */
router.get('/register', register);
router.post('/register', uploadFile.single('avatar'), registerValidator, processRegister);
router.get('/login', login);
router.post('/login', loginValidator, processLogin);

//***to Logout  */
router.get('/logout',logout);

//***to Profile Form */
router.get('/profile',checkUser, profileEdit);
router.put('/update-profile', updateProfile)



module.exports = router;
