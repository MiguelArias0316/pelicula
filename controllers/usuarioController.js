const {request, response} = require('express')
const bycript = require('bcryptjs') 
const Usuario = require('../models/usuario')

const crearUsuario = async (req = request , res= response) => {
    try{
        const {
            nombre,
            email,
            password,
            rol
        } = req.body

        const salt = bycript.genSaltSync();
        const hashedPassword = bycript.hashSync(password, salt);

        let data = {
            nombre,
            email,
            password: hashedPassword,
            rol
        }
        const usuario = new Usuario(data)
    
        await usuario.save()
    
        return res.status(201).json(usuario)
    }catch(e){
        console.log(e)
        return res.status(500).json({
            msj: e
        })
    }

}
const consultarUsuarios = async (req = request, res= response) =>{
    try{
        const usuarios = await Usuario.find()
    
        return res.json(usuarios)
    }catch(e){
        console.log(e)
        return res.status(500).json({
            msj: e
        })
    }
}

const editarUsuarioPorId = async (req = request, res= response) =>{
    try{
        const {
            nombre,
            estado,
            email,
            password,
            rol
        } = req.body
        const id = req.params.id
        let data ={
            nombre,
            estado,
            email,
            password,
            rol
        }
        data.fecha_actualizacion = new Date()

        const usuario = await Usuario.findByIdAndUpdate(id,data,{new:true})
    
        return res.status(201).json(usuario)
    }catch(e){
        console.log(e)
        return res.status(500).json({
            msj: e
        })
    }
}

const eliminarUsuarioPorId = async (req=request, res=response) =>{
    try{
        const id = req.params.id
        const usuario = await Usuario.findByIdAndDelete(id)
      return res.status(201).json(usuario)
    }catch(e){

        console.log(e)
        return res.status(500).json({
            mjs: e
        })
    }

}

module.exports = {
    crearUsuario,
    consultarUsuarios,
    editarUsuarioPorId,
    eliminarUsuarioPorId
}