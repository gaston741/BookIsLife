const express = require('express');
const path = require('path');
const router = express.Router();
const multer = require('multer');

//***UserController Require */
const {register, login, processRegister,processLogin,logout, profileEdit , updateProfile} = require ('../controllers/userController');

//********Validator require */
const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator')

let storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '../../public/images/users'))
    },
    filename: (req, file, callback) => {
        callback (null, file.fieldname + Date.now() + path.extname(file.originalname))
    }
})

const uploadFile = multer({ storage});
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
