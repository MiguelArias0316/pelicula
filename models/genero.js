const  {Schema, model} = require ('mongoose')

const Genero = Schema ({

    nombre:{
        type: String,
        unique: [true, 'Este nombre ya existe'],
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
        type: String,
        default: Date.now
    },
    descripcion:{
        type: String,
    },
})

module.exports = model('Genero', Genero)