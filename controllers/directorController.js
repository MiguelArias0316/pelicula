const {request, response} = require('express')

const Director = require('../models/director')

const crearDirector = async (req = request , res= response) => {
    try{
        const {nombre} = req.body

        let data = {
            nombre
        }
        const director = new Director(data)
    
        await director.save()
    
        return res.status(201).json(director)
    }catch(e){
        console.log(e)
        return res.status(500).json({
            msj: e
        })
    }

}
const consultarDirectores = async (req = request, res= response) =>{
    try{
        const directores = await Director.find()
    
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
        const {nombre} = req.body
        const id = req.params.id
        let data ={
            nombre
        }
        data.fecha_actualizacion = new Date()

        const director = await Director.findByIdAndUpdate(id,data,{new:true})
    
        return res.status(201).json(director)
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