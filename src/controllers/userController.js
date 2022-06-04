const bcryptjs = require ('bcryptjs');
const fs = require('fs');
const path = require('path')
const {validationResult}=require('express-validator');
const users = require ('../data/usersDataBase.json');
const { findSourceMap } = require('module');

module.exports={

    register: (req,res)=> res.render('register'),

    login:(req,res)=> res.render('login'),

    profile:(req,res)=> {
        return res.render('userProfile',{
            users
        })
    },

    profileEdit:(req,res)=> res.render('userProfileEdit'),

    processRegister: (req,res)=>{

        const errors = validationResult(req) //examino lo que viene de la petición

        if(errors.isEmpty()){
            //guardo los datos
            let {name,surname,email,password} = req.body; //desestructuracion del json
            /* Checking if the user array is empty or not. If it is not empty, it will return the last
            id of the user array. If it is empty, it will return 0. */
            let lastId = users.length !== 0 ? users[users.length - 1].id : 0 ; // si el ultimo id es distinto de 0, extraigo el ultimo id, sino q me devuelva 0

            let user = {
                id :  lastId + 1, //obtengo el ultimo id y le sumo uno
                name : name.trim(), //obtengo nombre
                surname : surname.trim(),//obtengo apellido
                email : email.trim(),//obtengo email
                password : bcryptjs.hashSync( password , 10), // hasheo pasword
                rol : "user",
                avatar : "userDefault.png"
               
            }
           /* Pushing the user object into the users array. */
            users.push(user);
           /* Writing the data in the usersDataBase.json file. */
            fs.writeFileSync(
                path.resolve(__dirname,"..","data", "usersDataBase.json"),
                JSON.stringify(users,null,3), "utf-8"
            );
          
            //levanto session

            //redireccionamiento

            return res.redirect('login') // renderizo login para que inicie session
        }else{

            return res.render('register',{ //renderizo register para que coloque los datos correctamente

                old :req.body, //devuelvo los campos no erroneos 
                errors: errors.mapped() // mando los errores que tuvo en cada campo especifico
            })
        }
       

    }

}