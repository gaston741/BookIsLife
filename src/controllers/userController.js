const bcryptjs = require("bcryptjs");
const fs = require("fs");
const path = require("path");
const moment = require('moment');
const { validationResult } = require("express-validator");
const db = require("../database/models"); /* Utilizo Base de Datos */

module.exports = {
  register: (req, res) => res.render("register"),

  login: (req, res) => res.render("login"),

  processRegister: (req, res) => {
    const errors = validationResult(req); //examino lo que viene de la petición
    if (errors.isEmpty()) {
      //guardo los datos
      let { name, surname, email, password } = req.body; //desestructuracion del json
      /* Checking if the user array is empty or not. If it is not empty, it will return the last
          id of the user array. If it is empty, it will return 0. */
      /* let lastId = users.length !== 0 ? users[users.length - 1].id : 0 ; */ // si el ultimo id es distinto de 0, extraigo el ultimo id, sino q me devuelva 0

      db.User.create({
        name: name.trim(), //obtengo nombre
        surname: surname.trim(), //obtengo apellido
        email: email.trim(), //obtengo email
        password: bcryptjs.hashSync(password, 10), // hasheo pasword
        avatar: req.file ? req.file.filename : "userDefault.png", // si recibo el achivo de req.file, guardo la propiedad filename, sino devolvemos la img por defecto.
        rolId: 2,
      })
        .then((user) => {
          //levanto session
          const { id, rol } = user;
          req.session.userLogin = {
            id,
            name: name.trim(),
            rol,
          };
          //redireccionamiento

          return res.redirect("login"); // renderizo login para que inicie session
        })
        .catch((error) => console.log(error));
    } else {
      
      /* errors = errors.mapped()
      if (req.fileValidationError) {
        errors = {
          ...errors,
          avatar : {
            msg : req.fileValidationError
          } 
        }
      } */
      
      return res.render("register", {
        //renderizo register para que coloque los datos correctamente
        old: req.body, //devuelvo los campos no erroneos
        errors: errors.mapped(), // mando los errores que tuvo en cada campo especifico
      });
    }
  },
  processLogin: (req, res) => {
    let errors = validationResult(req);
    
    if (errors.isEmpty()) {
      //traigo el dato del usuario que existe
      /* const {id,name,rol} =users.find(user=>user.email === req.body.email); */
      const { email } = req.body;

      db.User.findOne({
        where: {
          email,
        },
      }).then(({ id, name, rolId }) => {
        //levanto session
        req.session.userLogin = {
          id: +id,
          name,
          rolId: +rolId,
        };

        /* Saving the user's preference in a cookie for a certain time. */
        if (req.body.remember) {
          // si el usuario marca recordarme
          res.cookie("userBookIsLife", req.session.userLogin, {
            maxAge: 60000,
          }); //guardo su preferencia en una cookie por un tiempo determinado
        }
        res.redirect("/");
      });
    } else {
      //return res.send(errors)
      return res.render("login", {
        errors: errors.mapped(),
      });
    }
  },
  logout: (req, res) => {
    req.session.destroy();

    res.cookie("userBookIsLife", null, { maxAge: -1 }); //elimino la cookie

    return res.redirect("/");
  },

  profileEdit: (req, res) => {
    db.User.findByPk(req.session.userLogin.id)
      .then((user) => {
        /* Rendering the userProfileEdit view with the user object. */
        const birthday = moment(user.date).format('YYYY-MM-DD');
        return res.render("userProfileEdit", {
          user,
          date : birthday
        });
      })
      .catch((error) => console.log(error));
  },

  updateProfile: (req, res) => {

    let errors = validationResult(req);
    
    if (errors.isEmpty()) {
      const { name, surname, email, date, tel } = req.body;

      db.User.findByPk(req.session.userLogin.id)
        .then(user => {
          db.User.update(
            {
              name : name.trim(),
              surname : surname.trim(),
              date,
              tel : tel.trim(),
              avatar: req.file ? req.file.filename : user.avatar, 
            },
            {
              where : {
                id : req.session.userLogin.id
              }
            }
          )
          if (req.file) {
            if (
              fs.existsSync(
                path.resolve(
                  __dirname,
                  "..",
                  "public",
                  "images",
                  "user",
                  user.avatar
                )
              ) &&
              user.avatar !== "userDefault.png"
            ) {
              fs.unlinkSync(
                path.resolve(
                  __dirname,
                  "..",
                  "public",
                  "images",
                  "user",
                  user.avatar
                )
              );
            }
          }
          req.session.userLogin = {
            id: +user.id,
            name,
            rol: +user.rol,
          }
          return res.redirect("/");

        }).catch(error => console.log(error))

    } else {
      errors = errors.mapped()
      if (req.fileValidationError) {
        errors = {
          ...errors,
          avatar : {
            msg : req.fileValidationError
          } 
        }
      }
      console.log(errors, "++++++++++++++++++++++++");
      const birthday = moment(req.body.date).format('YYYY-MM-DD');
        return res.render("userProfileEdit", {
          user: req.body,
          date : birthday,
          errors
        });
    }
  },
  deleteUser: (req, res) => {
    db.User.destroy({
      where : {
        id : req.session.userLogin.id
      }
    }).then( () => {
      req.session.destroy();
      return res.redirect("/");
    })
    
  },
};
