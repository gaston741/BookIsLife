const path = require('path')
//requerimos multer para manipular img files en el form//
const multer = require('multer');

//configuracion de multer//
const storage = multer.diskStorage({

    destination : function( req, file, callback){
        callback( null, 'public/images/portadas')
    },
    filename : function (req,file,callback){
        callback (null, `${Date.now()}_products_${path.extname(file.originalname)}`) // seteo como quiero guardar el nombre original del producto.

    } 
})
const upload = multer({
    storage
})

module.exports = upload