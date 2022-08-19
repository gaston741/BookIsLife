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
const fileFilter = function(req, file,callback) {
    if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
        req.fileValidationError = "Solo se permite imágenes con extension jpg, jpeg, png";
        
        return callback(null,false,req.fileValidationError);
    }
    callback(null,true);

}

const uploadFile = multer({
    storage,
    fileFilter
})

module.exports = uploadFile