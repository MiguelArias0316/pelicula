const {request, response} = require('express')

const Directora = require('../models/directora')

const crearDirector = async (req = request , res= response) => {
    try{
        const nombre = req.body

        let data ={
            nombre
        }
        const directora = new Directora(data)
    
        await directora.save()
    
        return res.status(201).json(directora)
    }catch(e){
        console.log(e)
        return res.status(500).json({
            msj: e
        })
    }

}
const consultarDirectores = async (req = request, res= response) =>{
    try{
        const directores = await Directora.find()
    
        return res.json(directores)
    }catch(e){
        console.log(e)
        return res.status(500).json({
            msj: e
        })
    }
}

const editarDirectorPorId = async (req = request, res= response) =>{
    try{
        const nombre = req.body

        let data ={
            nombre
        }
        data.fecha_actualizacion = new Date()

        const directora = new Directora(data)
    
        await directora.save()
    
        return res.status(201).json(directora)
    }catch(e){
        console.log(e)
        return res.status(500).json({
            msj: e
        })
    }
}

module.exports = {
    crearDirector,
    consultarDirectores,
    editarDirectorPorId
}