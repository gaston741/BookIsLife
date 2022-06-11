// Requiero Multer para subir avatares de usuarios al registrarme, y path para almacenarlos en cierta carpeta
const path = require('path');

const multer = require('multer');

//configuro Multer
const storage = multer.diskStorage({

    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '../../public/images/users'))
    },

    filename: (req, file, callback) => {
        callback (null, file.fieldname + Date.now() + path.extname(file.originalname)); //se guarda con un nombre unico a cada avatar, pero con formatos aceptables.
    }
})

const uploadFile = multer({ storage});

module.exports = uploadFile;