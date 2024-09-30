const {Schema,model} = require ('mongoose')

const Productora = Schema({

    nombre:{
        type: String
    },
    estado:{
        type: Boolean
    },
    fecha_creacion:{
        type: Date,
        default: Date.now
    },
    fecha_actualizacion:{
        type: Date,
        default: Date.now
    },
    slogan:{
        type: String
    },
    descripcion:{
        type: String
    }
})

module.exports = model('Productora', Productora)