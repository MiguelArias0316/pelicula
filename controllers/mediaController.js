const {request,response} = require('express')

const Media = require('../models/media')

const crearMedia = async(req=request, res=response) => {

    try{
        const {
            serial,
            titulo,
            sinopsis,
            url,
            imagen,
            fecha_estreno,
            genero,
            director,
            productora,
            tipoMultimedia,
        } = req.body
    
        data = {
            serial,
            titulo,
            sinopsis,
            url,
            imagen,
            fecha_estreno,
            genero,
            director,
            productora,
            tipoMultimedia
        }
        const media = new Media(data)
        await media.save()
        return res.status(201).json(media)
    }catch(e){
        console.log(e)
        return res.status(500).json({
            mjs: e
        })
    }
}

const consultarMedia = async (req=request, res=response) =>{
    try{
        const media = await Media.find()
        return res.json(media)
    }catch(e){
        console.log(e)
        return res.status(500).json({
            mjs: e
        })
    }
}

const editarMediaPorId = async (req=request, res=response) =>{
try{
    const {
        serial,
        titulo,
        sinopsis,
        url,
        imagen,
        fecha_estreno,
        genero,
        director,
        productora,
        tipoMultimedia,
    } = req.body

    data = {
        serial,
        titulo,
        sinopsis,
        url,
        imagen,
        fecha_estreno,
        genero,
        director,
        productora,
        tipoMultimedia
    }
    const id = req.params.id

    const media = await Media.findByIdAndUpdate(id,data,{new:true})

    return res.status(201).json(media)
}catch(e){
    console.log(e)
    return res.status(500).json({
        mjs: e
    })
}
}

const eliminarMediaPorId = async (req=request, res=response) =>{
    try{

        const id = req.params.id
        const media = await Media.findByIdAndDelete(id)
      return res.status(201).json(media)
    }catch(e){

        console.log(e)
        return res.status(500).json({
            mjs: e
        })
    }

}

module.exports = {
    crearMedia,
    consultarMedia,
    editarMediaPorId,
    eliminarMediaPorId
}