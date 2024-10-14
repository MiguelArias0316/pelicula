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
        const {nombre, slogan, descripcion, estado} = req.body
        const id = req.params.id

        let data = {
            nombre,
            slogan,
            descripcion,
            estado
        }
        data.fecha_actualizacion = new Date()
        const productora = await Productora.findByIdAndUpdate(id,data,{new:true})
    
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