const express = require('express');
const router = express.Router();

const {register, login, profile} = require ('../controllers/userController')

/* GET users listing.  /users */

router.get('/register', register);
router.get('/login', login);
router.get('/profile', profile);



module.exports = router;
