const express = require('express');
const router = express.Router();


//***UserController Require */
const {register, login, processRegister,processLogin,logout, profileEdit , updateProfile} = require ('../controllers/userController');

//********Validator require */
const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator')

// middleware require  
const uploadFile = require ('../middlewares/uploadUserAvatar')
const checkUser = require ('../middlewares/checkUser')
const uploadFileRegister = require('../middlewares/uploadAvatarRegister')
const {inSession} = require('../middlewares/sessionCheck');

/* GET users listing.  /users */
router.get('/register',inSession, register);
router.post('/register',uploadFileRegister.single('avatar'), registerValidator, processRegister);
router.get('/login',inSession, login);
router.post('/login', loginValidator, processLogin);

//***to Logout  */
router.get('/logout',logout);

//***to Profile Form */
router.get('/profile',checkUser, profileEdit);
router.put('/update-profile',uploadFile.single('avatar'), updateProfile)



module.exports = router;
