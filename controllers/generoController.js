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
    }
    
}

const consultarGenero = (req = request, res = response) => {

}

const consultarGeneroPorId = (req = request, res = response) => {

}

const editarGenero = (req = request, res = response) => {

}
const editarGeneroPorId = (req = request, res = response) => {

}

module.exports = {
    crearGenero
}