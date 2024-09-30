const {Schema, model} = require ('mongoose')

const TipoMultimedia = Schema({
    nombre:{
        type: String,
        unique: [true,'Este nombre ya existe']
    },
    fecha_creacion:{
        type: Date,
        default: Date.now
    },
    fecha_actualizacion:{
        type: Date,
        default: Date.now
    },
    descripcion:{
        type: String
    }
})

module.exports = model('TipoMultimedia', TipoMultimedia)