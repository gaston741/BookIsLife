const {check} = require ('express-validator');

module.exports =[

    check("name") //validacion nombre
    .notEmpty()
    .withMessage("Campo vacio"),
    
    check("surname") //validacion apellido
        .notEmpty()
        .withMessage("Campo vacio"),


]