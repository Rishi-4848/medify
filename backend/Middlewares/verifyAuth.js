
const password = process.env.PASSWORD

const verifyAuth = (req,res,next)=>{
    const {auth} = req.headers;

    if(!auth){
      res.status(403).json({message:"unauthorized request"})
    }
   if(auth !== password){
    res.status(403).json({message:"unauthorized request"})
   }
   next()
}

module.exports = {
  verifyAuth
}