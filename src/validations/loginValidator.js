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
                    email : req.body.email
                }
            }).then(user => {
                if(!user || !bcryptjs.compareSync(value, user.password)) {
                    return Promise.reject()
                }
        }).catch((error) => {
            console.log(error)
            return Promise.reject('Datos invalidos!')
        })
    })

]