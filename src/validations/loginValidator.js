const {check} = require ('express-validator');
const bcryptjs = require('bcryptjs');
const db = require('../database/models')

/* const users = require ('../data/usersDataBase.json'); */

module.exports =[
    
    check("email")
        .notEmpty()
        .withMessage("ingresá tu email")
        .bail()
        .isEmail()
        .withMessage("Email no válido"),
       
    check("password")
        .notEmpty()
        .withMessage("Debes ingresar tu contraseña")
        .bail()
        .custom((value, {req}) => {
            return db.User.findOne({
                where : {
                    email : req.check.email
                }
            }).then(user => {
                if(!user || !bcryptjs.compareSync(value, user.password)) {
                    return Promise.reject()
                }
        }).catch(() => {Promise.reject('Datos invalidos!')})
    })

        /* .custom((value,{req})=>{
        /* Comparing the email and password with the ones in the database. */
        /* const user = users.find(user=>user.email === req.body.email);
        if(!user){
            return false
        }else{
            
            if(!bcryptjs.compareSync(value, user.password)){ // si son diferentes las contraseñas que se estan comparando : false.
                return false
            }
        } */
        /* Returning true if the email and password are correct. */
            /* return true
        }).withMessage("Credenciales inválidas") */

]