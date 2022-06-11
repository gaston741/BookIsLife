/* A middleware function that checks if the user is logged in. If the user is logged in, it will
continue to the next middleware function. If the user is not logged in, it will redirect the user to
the login page. */
module.exports =( req,res,next) =>{

    if(req.session.userLogin){ // si tengo session levantada
        next() // dar acceso
    }else{ // sino 
        res.redirect('/users/login') // mandar la vista login
    }
}