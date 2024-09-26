const {Schema, model} = require('mongoose')

const Media = Schema({
    serial:{
        type: String,
        unique: [true,'Serial ya existe']
    },
    titulo:{
        type: String
    },
    sinopsis:{
        type:String
    },
    url:{
        type: String,
        unique:[true,'Url ya existe']
    },
    imagen:{
        type: String
    },
    fecha_creacion:{
        type: Date,
        default: new Date()
    },
    fecha_actualizacion:{
        type: Date,
    },
    fecha_estreno:{
        type: Date,
    },
    genero:{
        type:Schema.Types.ObjectId,
        ref:'Genero',
    },
    director:{
        type: Schema.Types.ObjectId,
        ref: 'Director'
    },
    productora:{
        type: Schema.Types.ObjectId,
        ref: 'Productora'
    },
    tipo: {
        type: Schema.Types.ObjectId,
        ref: 'Tipo'
    }
})

module.exports = model('Media', Media)