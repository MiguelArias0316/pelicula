const {request, response} = require('express')
const bycript = require('bcryptjs')
const Usuario = require('../models/usuario')
const {generarJWT} = require('../helper/jwt')


const authUser = async (req = request , res= response) => {
    try{
        const usuario = await Usuario.findOne({email : req.body.email})
        if(!usuario){
            return res.status(400).send("Usuario no encontrado")
        }
        const esIgual = bycript.compareSync(req.body.password, usuario.password)
        if(!esIgual){
            return res.status(400).json({mensaje:'Usuario no encontrado'});
        }
        const token = generarJWT(usuario);

        res.json({
            _id:usuario._id, nombre: usuario.nombre,
            rol:usuario.rol, email: usuario.email, access_token: token
        })
    }catch(e){
        console.log(e)
        return res.status(500).json({
            msj: e
        })
    }

}

module.exports = {
    authUser,
}