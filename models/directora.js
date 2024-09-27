const  {Schema, model} = require ('mongoose')

const Directora = Schema({
    nombre:{
        type: String
    },
    estado:{
        type: Boolean
    },
    fecha_creacion:{
        type: Date
    },
    fecha_actualizacion:{
        type: Date
    }
})

module.exports = model('Directora', Directora)