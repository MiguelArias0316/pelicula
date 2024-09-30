const {request, response} = require('express')

const TipoMultimedia = require('../models/tipoMultimedia')

const crearTipoMultimedia = async (req=request, res= response) => {

    try{
        const {nombre, descripcion} = req.body
    
        const data = {
            nombre,
            descripcion
        }
        const tipoMultimedia = new TipoMultimedia(data)

        await tipoMultimedia.save()
        return res.status(201).json(tipoMultimedia)
    }catch(e){
        console.log(e)
        res.status(500).json({
            msj: e
        })
    }

}

const consultarTiposMultimedia = async (req=request, res=response) =>{
    
    try{
        const tiposMultimedia = await TipoMultimedia.find()

        return res.json(tiposMultimedia)

    }catch(e){
        console.log(e)
        res.status(500).json({
            msj: e
        })
    }
}

module.exports = {
    crearTipoMultimedia,
    consultarTiposMultimedia
}