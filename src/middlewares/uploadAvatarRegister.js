// Requiero Multer para subir avatares de usuarios al registrarme, y path para almacenarlos en cierta carpeta
const path = require('path')
const multer = require('multer');

//configuro Multer
const storage = multer.diskStorage({

    destination: (req, file, callback) => {

        callback(null, path.join(__dirname, '../../public/images/users')); // direcciono a la carpeta donde guardo los avatarUsers
    },

    filename: (req, file, callback) => {

        callback (null, file.fieldname + Date.now() + path.extname(file.originalname)); //Se les asigna un nombre único al avatarUser asi evitar inconvenientes al guardarlo.
    }
})

const uploadFileRegister = multer({ storage});




module.exports = uploadFileRegister;