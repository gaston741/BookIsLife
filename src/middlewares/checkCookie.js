
module.exports = (req,res,next)=>{
    
    
    if(req.cookies.userBookIsLife){ // si existe una cookie con ese valor

        req.session.userLogin = req.cookies.userBookIsLife; //levantamos session a partir de esa cookie
    }
    console.log('***********',req.session.userLogin)
    next()

}