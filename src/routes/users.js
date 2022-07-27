const express = require('express');
const router = express.Router();


//***UserController Require */
const { register ,processRegister ,login ,processLogin ,logout ,profileEdit ,updateProfile ,deleteUser } = require ('../controllers/userController');

//********Validator require */
const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator');
const profileValidator = require('../validations/profileValidator');

// middleware require  
const uploadFile = require ('../middlewares/uploadUserAvatar')
const checkUser = require ('../middlewares/checkUser')
const uploadFileRegister = require('../middlewares/uploadAvatarRegister')
const {inSession} = require('../middlewares/sessionCheck');

/* GET users listing.  /users */

// TO REGISTER
router.get('/register',inSession, register);
router.post('/register',uploadFileRegister.single('avatar'), registerValidator, processRegister);

// TO LOGIN
router.get('/login',inSession, login);
router.post('/login', loginValidator, processLogin);

//***TO LOGOUT  */
router.get('/logout',logout);

//***TO PROFILE */
router.get('/profile',checkUser, profileEdit);
router.put('/update-profile',uploadFile.single('avatar'),profileValidator, updateProfile)
router.delete('/deleteUser/:id', deleteUser)



module.exports = router;
