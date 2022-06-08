const path = require('path')
//requerimos multer para manipular img files en el form//
const multer =require('multer');

//configuracion de multer//
const storage =multer.diskStorage({

    destination : function( req, file, callback){
        callback( null, 'public/images/users')
    },
    filename : function (req,file,callback){
        callback (null, `${Date.now()}_users_${path.extname(file.originalname)}`) // seteo como quiero guardar el nombre original del producto.

    }
})
const uploadFile = multer({
    storage
})

module.exports = uploadFile