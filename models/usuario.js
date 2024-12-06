const {Schema, model} = require ('mongoose')

const Usuario = Schema({
    nombre:{
        type: String
    },
    email:{
        type: String,
    },
    estado:{
        type: Boolean,
        default: true
    },
    password:{
        type: String,
    },
    rol:{
        type: String,
        enum:
        [
            'Administrador','Docente'
        ]
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

module.exports = model('Usuario', Usuario)