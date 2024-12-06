const jwt = require('jsonwebtoken')

const validarJTW = (req, res, next) =>{
    const token = req.header('Authorization')
    if(!token){
        return res.status(401).json({mensaje: "Error unaunthorized"})
    }

    try{
        const payload = jwt.verify(token,'123456789')
        req.payload = payload;
        next();

    }catch(e){
        console.log(e);
        return res.status(401).json({mensaje: "Error unaunthorized"})
    }
}
module.exports = {
    validarJTW
}