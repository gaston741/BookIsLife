const path = require('path');
const { check } = require ('express-validator');
// const db = require('../database/models');

module.exports = [

    check("name")
        .notEmpty()
        .withMessage("Debes ingresar un título")
        .bail()
        .isLength({min : 5 , max : 50})
        .withMessage(" Deberá tener al menos 5 caracteres"),

    check("price")
        .notEmpty()
        .withMessage("Debes indicar el precio del libro"),

    check("autorId")
        .notEmpty()
        .withMessage("Debes indicar el nombre del autor"),
        /*.bail()
         .isLength({min : 5 , max : 50})
        .withMessage(" Debe tener entre 5 y 50 caracteres"), */

    check("publisherId")
        .notEmpty()
        .withMessage("Debes indicar la editorial"),
        /*.bail()
         .isLength({min : 2 })
        .withMessage(" Debe tener al menos 2 caracteres"), */

    check("genreId")
        .notEmpty()
        .withMessage("Debes indicar el género"),

    check("languageId")
        .notEmpty()
        .withMessage("Debes indicar el idioma de la edición"),

    check("categoryId")
        .notEmpty()
        .withMessage("Debes indicar la categoria del libro"),

    check("description")
        .notEmpty()
        .withMessage("Debes ingresar la sinopsis")
        .bail()
        .isLength({min : 20 })
        .withMessage("Deberá tener al menos 20 caracteres"),

    check("portada").custom((value, { req }) => {

            let file = req.file;
            let allowedExtensions = [ '.jpg' , '.jpeg' , '.png' , '.gif' ];   //EXTENCIONES ACEPTADAS

            /*  if (!file) {     //SI NO EXISTE EL ARCHIVO, MANDA EL ERROR DE ABAJO
                
                throw new Error ('Tienes que subir una Imagen');
                
             }*/ if (file) {     //SI EXISTE EL ARCHIVO.. 
                
                let fileExtension = path.extname(file.originalname);    // ESTA VARIABLE TOMA LA EXTENCION DEL ARCHIVO QUE SUBE EL USUARIO AL REGISTRARSE
                
                if (!allowedExtensions.includes(fileExtension)) {      // SI ESTA EXTENCION, NO ES DE LA ACEPTADAS, SE MANDA EL ERROR DE ABAJO
                    
                    throw new Error(`Las extensiones de archivos permitidas son ${allowedExtensions.join(' | ')}`); // (MANDA ERROR CUANDO LA EXTENCION DEL ARCHIVO NO ES ACEPTADA)
                }
            }
            return true;

        })

]