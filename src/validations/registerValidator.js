const {check,body} = require ('express-validator');

module.exports =[

    check("name")
        .isLength({min : 2})
        .withMessage("Minimo 2 caracteres")
        .bail()
        .isAlpha()
        .withMessage("Sólo letras permitidas"),
    
    check("surname")
        .isLength({min : 2 })
        .withMessage("Mínimo 2 caracteres")
        .bail()
        .isAlpha()
        .withMessage("Sólo letras permitidas"),
    
    check("email")
        .notEmpty()
        .withMessage("ingresá tu email")
        .bail()
        .isEmail()
        .withMessage("Email no válido"),
       
    check("password")
        .isLength({min: 6 ,max: 12})
        .withMessage("Debe tener un mínimo de 6  y 12 caracteres."),
    
   check("password")
    .custom((value,{req})=>{
        if(value !== req.body.password){

            return false
        }
        return true
    })
    .withMessage("Las constraseñas no coinciden"),

    check("terms")
    .isString("on")
    .withMessage("Debes aceptar los términos y condiciones")
 

]