const jwt = require('jsonwebtoken')

 generarJWT = (usuario) => {
    const payload = {
        _id: usuario._id,
        nombre: usuario.nombre,
        rol: usuario.rol,
        estado: usuario.estado
    };
    const token = jwt.sign(payload,'123456789',{expiresIn:'1h'})
    return token;
 }

 module.exports = {
    generarJWT
 }