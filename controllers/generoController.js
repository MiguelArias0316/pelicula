const { request, response } = require('express')
const Genero = require ('../models/genero')

const crearGenero = async (req = request, res = response) => {

    try{
        const {nombre, descripcion} = req.body

        let data = {
            nombre,
            descripcion 
        }
        const genero = new Genero(data)
    
        await genero.save()
    
        return res.status(201).json(genero)
    }catch(e){
        console.log(e)
        return res.status(500).json({
            msj: e
        })
    }}

const consultarGeneros = async (req = request, res = response) => {
try{
    const generos = await Genero.find()

    return res.json(generos)

}catch(e){
    console.log(e)
    return res.status(500).json({
        msj:e
    })
}}

/* const consultarGeneroPorId = async (req = request, res = response) => {
    try{
        const id = await Genero.findById(id)
        
        return res.json(genero)

    }catch(e){
        console.log(e)
        return res.status(500).json({
            msj: e
        })
    }

} */

const editarGeneroPorId = async (req = request, res = response) => {
    try{
        const {nombre, descripcion} = req.body

        let data = {
            nombre,
            descripcion 
        }
        data.fecha_actualizacion = new Date() 
        const genero = new Genero(data)
        await genero.save()
    
        return res.status(201).json(genero)
    }catch(e){
        console.log(e)
        return res.status(500).json({
            msj: e
        })
    }}

module.exports = {
    crearGenero,
    consultarGeneros,
    editarGeneroPorId
}