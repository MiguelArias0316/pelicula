const {request, response} = require('express')

const Productora = require('../models/productora')

const crearProductora = async(req=request, res=response) => {

    try{
        const {nombre, slogan, descripcion} = req.body
    
        let data = {
            nombre,
            slogan,
            descripcion
        }
        const productora = new Productora(data)
    
        await productora.save()
    
        return res.status(201).json(productora)
    }catch(e){
        console.log(e)
        return res.status(500).json({
            msj: e
        })
    }

}

const consultarProductoras = async (req=request, res=response) =>{
    try{
        const productoras = await Productora.find()

        return res.json(productoras)

    }catch(e){
        console.log(e)
        return res.status(500).json({
            msj: e
        })
    }
}

const editarProdcutoraporId = async (req= request, res=response) =>{
    try{
        const {nombre, slogan, descripcion} = req.body
    
        let data = {
            nombre,
            slogan,
            descripcion
        }
        data.fecha_actualizacion = new Date()
        const productora = new Productora(data)
    
        await productora.save()
    
        return res.status(201).json(productora)
    }catch(e){
        console.log(e)
        return res.status(500).json({
            msj: e
        })
    }
}

module.exports = {
    crearProductora,
    consultarProductoras,
    editarProdcutoraporId
}