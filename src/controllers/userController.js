const bcryptjs = require ('bcryptjs');
const fs = require('fs');
const path = require('path');
const {validationResult}=require('express-validator');
const db = require('../database/models');

/* const users = require ('../data/usersDataBase.json'); */

module.exports={

    register: (req,res)=> res.render('register'),

    login:(req,res)=> res.render('login'),

    processRegister: (req,res)=>{

        const errors = validationResult(req); //examino lo que viene de la petición
        /* return res.send(errors) */
        if(errors.isEmpty()){
            //guardo los datos
            let {name,surname,email,password} = req.body; //desestructuracion del json
            /* Checking if the user array is empty or not. If it is not empty, it will return the last
            
            id of the user array. If it is empty, it will return 0. */
            /* let lastId = users.length !== 0 ? users[users.length - 1].id : 0 ; */ // si el ultimo id es distinto de 0, extraigo el ultimo id, sino q me devuelva 0

            db.User.create({
              name : name.trim(), //obtengo nombre
              surname : surname.trim(),//obtengo apellido
              email : email.trim(),//obtengo email
              password : bcryptjs.hashSync( password , 10), // hasheo pasword
              avatar : req.file ? req.file.filename : "userDefault.png", // si recibo el achivo de req.file, guardo la propiedad filename, sino devolvemos la img por defecto.
              rolId : 2,
              
            })
              .catch(error => console.log(error));
          
            /* Pushing the user object into the users array. */
            /* users.push(user); */

            /* Writing the data in the usersDataBase.json file. */
            /* fs.writeFileSync(
                path.resolve(__dirname,"..","data", "usersDataBase.json"),
                JSON.stringify(users,null,3), "utf-8"
            ); */
          
            //levanto session
            const {id, rol} = user
            req.session.userLogin = {
              id,
              name: name.trim(),
              rol
          }
            //redireccionamiento

            return res.redirect('login') // renderizo login para que inicie session
        }else{

            return res.render('register',{ //renderizo register para que coloque los datos correctamente

                old :req.body, //devuelvo los campos no erroneos 
                errors: errors.mapped() // mando los errores que tuvo en cada campo especifico
            })
        }
       

    },
    processLogin : (req,res)=>{

        let errors = validationResult(req);
        
        if(errors.isEmpty()) {
            
            //traigo el dato del usuario que existe
            /* const {id,name,rol} =users.find(user=>user.email === req.body.email); */ 
            const {email} = req.body

            db.User.findOne({
              where : {
                email
              }
            }).then( ({id, name, rol}) => {
              //levanto session  
              req.session.userLogin = {
                id : +id,
                name,
                rol : +rolId,
                }

              /* Saving the user's preference in a cookie for a certain time. */
              if(req.body.remember){ // si el usuario marca recordarme
                res.cookie("userBookIsLife" , req.session.userLogin, { maxAge : 60000 } ) //guardo su preferencia en una cookie por un tiempo determinado
              }
              res.redirect("/");
            })

            

        }else {
          //return res.send(errors)
            return res.render("login",{
              errors : errors.mapped(),   
            })
        }

        
    },
    logout :(req,res)=>{

        req.session.destroy();

        res.cookie("userBookIsLife",null, {maxAge : -1}) //elimino la cookie 
        
        return res.redirect('/')
    },

    profileEdit :(req,res)=>{
      /* const users = JSON.parse(fs.readFileSync('./src/data/usersDataBase.json','utf-8' )); */
      
       /* Finding the user object in the users array that has the same id as the user that is logged
       in. */
      /* const user = users.find(user => user.id === req.session.userLogin.id); */

      //db.User.findByPk(req.session.userLogin.id)
      
      /* Rendering the userProfileEdit view with the user object. */
       return res.render('userProfileEdit',{
          user
       })
    
    },

    updateProfile : (req,res) => {

        let errors = validationResult(req);
        if (errors.isEmpty()) {
          const {name,surname,email,date,address,tel,avatar} = req.body
          const {id} = users.find(user => user.id === req.session.userLogin.id );
    
          const usersModified = users.map((user) => {
            if (user.id === +id) {
              let userModified = {
                ...user,
                name : name,
                surname : surname,
                date,
                address : address,
                tel: tel,
                avatar: req.file ? req.file.filename : user.avatar, //si me llega una imagen , la devuelvo, sino uso la que estaba antes
              };
              if (req.file) {
                if (
                  fs.existsSync(
                    path.resolve(__dirname, "..", "public", "images", "user", user.avatar)
                  ) &&
                  user.avatar !== "userDefault.png"
                ) {
                  fs.unlinkSync(
                    path.resolve(__dirname, "..", "public", "images", "user", user.avatar)
                  );
                }
              }
             
              return userModified;
            }
            return user; 
          });
          /* fs.writeFileSync(
            path.resolve(__dirname, "..", "data", "usersDataBase.json"),
            JSON.stringify(usersModified, null, 3),
            "utf-8"
          ); */
    
          req.session.userLogin = {
            ...req.session.userLogin,
            name
          }
          res.locals.userLogin =req.session.userLogin
    
          return res.redirect("/");
        }else{
            console.log(errors);
            return res.render("userProfileEdit", {
                usuario : req.body,
                errors : errors.mapped()
              });
        }
    
      },
      deleteUser : (req,res)=>{
       
        /* const users = JSON.parse(fs.readFileSync('./src/data/usersDataBase.json','utf-8' )); */

        const usersModified = users.filter(user => user.id !== req.session.userLogin.id)

        /* fs.writeFileSync(
          path.resolve(__dirname, "..", "data", "usersDataBase.json"),
          JSON.stringify(usersModified, null, 3),
          "utf-8"
        ); */
        req.session.destroy();
        return res.redirect('/');

      }



}