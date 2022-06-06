const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

let storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '../../public/images/users'))
    },
    filename: (req, file, callback) => {
        callback (null, file.fieldname + Date.now() + path.extname(file.originalname))
    }
})

const uploadFile = multer({ storage});

//***UserController Require */
const {register, login, processRegister,processLogin,logout, profileEdit , updateProfile} = require ('../controllers/userController');

//********Validator require */
const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator')

<<<<<<< HEAD

//********Middleware require */
const checkUser =require('../middlewares/checkUser')

/* GET users listing */

//***to Register Form */
router.get('/register', register);
router.post('/register',registerValidator, processRegister);

//***to Login Form */
=======
/* GET users listing.  /users */
router.get('/register', register);
router.post('/register', uploadFile.single('avatar'), registerValidator, processRegister);
>>>>>>> c51b9cb820085129837b2a2baf08fef98cc66893
router.get('/login', login);
router.post('/login', loginValidator, processLogin);

//***to Logout  */
router.get('/logout',logout);

//***to Profile Form */
router.get('/profile',checkUser, profileEdit);
router.put('/update-profile', updateProfile)



module.exports = router;
