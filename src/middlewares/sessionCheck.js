module.exports = {
    inSession : (req,res,next) =>{
        if(req.session.userLogin){
            res.redirect('/');
        }else{
            next()
        }
    }
}