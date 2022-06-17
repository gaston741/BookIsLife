const path = require('path');
const {check,body} = require ('express-validator');
const users = require('../data/usersDataBase.json');

module.exports = [

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
        .withMessage("Email no válido").bail()
            .custom((value)=>{
            
            const user = users.find(user=>user.email === value);
            
            if(user){ // si existe un usuario  registrado con ese mail 
                
                return false // no lo dejo registrarse
        
            }else{ // si no tengo un usuario con ese mail
            
            return true // lo dejo registrarse

            }

        })
        .withMessage("El email ya se encuentra registrado"),
        
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
    .withMessage("Las contraseñas no coinciden"),

    check('avatar').custom((value, {req}) => {
        
        let file = req.file;
        let acceptedExtensions = ['.jpg' , '.png', '.gif' ];   //EXTENCIONES ACEPTADAS

        /* if (!file) {     //SI NO EXISTE EL ARCHIVO, MANDA EL ERROR DE ABAJO

            throw new Error ('Tienes que subir una Imagen');       //Esto fue retirado momentaneamente 

        }*/ if (file) {     //SI EXISTE EL ARCHIVO.. 

            let fileExtension = path.extname(file.originalname);   // ESTA VARIABLE TOMA LA EXTENCION DEL ARCHIVO QUE SUBE EL USUARIO AL REGISTRARSE

        if (!acceptedExtensions.includes(fileExtension)) {    // SI ESTA EXTENCION, NO ES DE LA ACEPTADAS, SE MANDA EL ERROR DE ABAJO

            throw new Error (`Las extensiones de archivos permitidas son ${acceptedExtensions.join(', ')}`); // (MANDA ERROR CUANDO LA EXTENCION DEL ARCHIVO NO ES ACEPTADA)
        }
    }

        return true;
    }),

    check("terms") //validacion de terminos
    .isString("on")
    .withMessage("Debes aceptar los términos y condiciones")


]