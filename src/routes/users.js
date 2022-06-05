const express = require('express');
const router = express.Router();
const { path } = require('express/lib/application');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '../public/images/users'))
    },
    filename: (req, file, callback) => {
        let filename = '${Date.now()}_img${path.extname(file.originalName)}';
        callback(null, filename)
    }
})

const uploadFile = multer({ storage});

//***Controller Require */
const {register, login, processRegister,processLogin,logout} = require ('../controllers/userController');

//********Validator require */
const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator')

/* GET users listing.  /users */
router.get('/register', register);
router.post('/register', uploadFile.single('avatar'), registerValidator, processRegister);
router.get('/login', login);
router.post('/login', loginValidator, processLogin);
router.get('/logout',logout)



module.exports = router;
