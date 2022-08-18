const path = require('path');
const {check} = require ('express-validator');

module.exports =[

    check("name")
        .isLength({ min: 2 })
        .withMessage("Minimo 2 caracteres")
        .bail()
        .isAlpha()
        .withMessage("Sólo letras permitidas"),
    
    check("surname")
        .isLength({ min: 2 })
        .withMessage("Mínimo 2 caracteres")
        .bail()
        .isAlpha()
        .withMessage("Sólo letras permitidas"),

    check("tel")
        .notEmpty()
        .withMessage("ingresá tu Telefono")
        .bail()
        .isNumeric()
        .withMessage("Sólo números permitidos"),

]