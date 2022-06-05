const express = require('express');
const router = express.Router();

//***Controller Require */
const {register, login, processRegister, profile, profileEdit} = require ('../controllers/userController');

//********Validator require */
const registerValidator = require('../validations/registerValidator');

/* GET users listing.  /users */

router.get('/register', register);
router.post('/register',registerValidator, processRegister);
router.get('/login', login);
router.post('/profile', profile);
router.post('/profile/edit',profileEdit)



module.exports = router;
