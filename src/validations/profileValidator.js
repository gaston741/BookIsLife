const path = require('path');
const {check} = require ('express-validator');

module.exports =[

    check("name")
        .notEmpty()
        .withMessage("ingresá tu Nombre")
        .bail()
        .isLength({ min: 2 })
        .withMessage("Minimo 2 caracteres")
        .bail()
        .isAlpha()
        .withMessage("Sólo letras permitidas"),
    
    check("surname")
        .notEmpty()
        .withMessage("ingresá tu Apellido")
        .bail()
        .isLength({ min: 2 })
        .withMessage("Mínimo 2 caracteres")
        .bail()
        .isAlpha()
        .withMessage("Sólo letras permitidas"),

]