
module.exports = (req,res,next)=>{
    
    if(req.session.userLogin){ //si levanto session
        
        res.locals.userLogin =req.session.userLogin; //guardo los datos que me vienen por locals en session
    }
    next()
}