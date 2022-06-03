const express = require('express');
const router = express.Router();
const multer = require('multer');
const { path } = require('express/lib/application');
const controller = require('../controllers/userController');

let storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '../public/images/users'))
    },
    filename: (req, file, callback) => {
        let newFilename = 'imgProfile-' + Date.now() + path.extname(file.originalName);
        callback(null, newFilename)
    }
})

const upload = multer({ storage});

//***Controller Require */
const {register, login, processRegister,processLogin} = require ('../controllers/userController');

//********Validator require */
const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator')
/* GET users listing.  /users */

router.get('/register', register);
router.post('/register',registerValidator, upload.single('userImage'), processRegister);
router.get('/login', login);
router.post('/login', loginValidator, processLogin)



module.exports = router;
