const {check,body} = require ('express-validator');

module.exports = [

    check("name")
        .notEmpty()
        .withMessage("Debes ingresar un título")
        .bail()
        .isLength({min : 2 , max : 10})
        .withMessage(" Debe tener entre 6 y 10 caracteres"),

    check("autor")
        .notEmpty()
        .withMessage("Debes indicar el nombre del autor"),

    check("price")
        .notEmpty()
        .withMessage("Debes indicar el precio del libro"),
    
    check("description")
        .notEmpty()
        .withMessage("Debes ingresar la sinopsis"),

    check("publisher")
        .notEmpty()
        .withMessage("Debes indicar la editorial"),

    check("genre")
        .notEmpty()
        .withMessage("Debes indicar el género"),
    
    check("language")
        .notEmpty()
        .withMessage("Debes indicar el idioma de la edición"),
    
    check("category")
        .notEmpty()
        .withMessage("Debes indicar la categoria del libro"),
    
    



    




]