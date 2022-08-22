const db = require('../database/models')
const path = require('path');
const { check, body } = require('express-validator');

module.exports = [

    check("name")
        .isLength({ min: 4, max: 12 })
        .withMessage("Tiene que tener entre 4 y 12 caracteres.")
        .bail()
        .isAlpha()
        .withMessage("Sólo letras permitidas"),

    check("surname")
        .isLength({ min: 4, max: 12 })
        .withMessage("Tiene que tener entre 4 y 12 caracteres.")
        .bail()
        .isAlpha()
        .withMessage("Sólo letras permitidas"),

    body("email")
        .notEmpty()
        .withMessage("ingresá tu email")
        .bail()
        .isEmail()
        .withMessage("Email no válido")
        .bail()
        .custom(value => {
            return db.User.findOne({ //le estoy pidiendo que busque en el Modelo User si esxiste el Email
                where : {
                    email : value
                }
            }).then(user => {
                if (user) {
                    return Promise.reject() //Si ya existe el Usuario rechasame la promesa
                }
        }).catch(() => Promise.reject('El email ya se encuentra registrado!')) // Y tirame este mensaje

        }),

    check("password")
        .isLength({ min: 6, max: 12 })
        .withMessage("Tiene que tener entre 6 y 12 caracteres."),

    check("password2")
        .notEmpty()
        .withMessage("Tenes que Confirmar tu Contraseña")
        .custom((value, { req }) => {
            if (value !== req.body.password2) {
                return false
            }else {
                return true
            }
        })
        .withMessage("Las constraseñas no coinciden"),

    /* check('avatar').custom((value, { req }) => {

        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.jpeg', '.gif']; */   //EXTENCIONES ACEPTADAS

        /* if (!file) {     //SI NO EXISTE EL ARCHIVO, MANDA EL ERROR DE ABAJO

            throw new Error ('Tienes que subir una Imagen');       //Esto fue retirado momentaneamente 

        }*/ /* if (file) {     //SI EXISTE EL ARCHIVO.. 

            let fileExtension = path.extname(file.originalname);    // ESTA VARIABLE TOMA LA EXTENCION DEL ARCHIVO QUE SUBE EL USUARIO AL REGISTRARSE

            if (!acceptedExtensions.includes(fileExtension)) {      // SI ESTA EXTENCION, NO ES DE LA ACEPTADAS, SE MANDA EL ERROR DE ABAJO

                throw new Error(`Las extensiones de archivos permitidas son ${acceptedExtensions.join(', ')}`); // (MANDA ERROR CUANDO LA EXTENCION DEL ARCHIVO NO ES ACEPTADA)
            }
        }
        return true;
    }), */

    check("terms") //validacion de terminos
        .isString("on")
        .withMessage("(Debes aceptar los términos y condiciones)")


]