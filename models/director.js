const  {Schema, model} = require ('mongoose')

const Director = Schema({

    nombre:{
        type: String
    },
    estado:{
        type: Boolean,
        default: true
    },
    fecha_creacion:{
        type: Date,
        default: Date.now
    },
    fecha_actualizacion:{
        type: Date,
        default: Date.now
    }
})

module.exports = model('Director', Director)