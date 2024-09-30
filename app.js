const dotenv = require('dotenv')
const express = require('express')
const app = express()
dotenv.config()
const { mongoConn } = require('./databases/config')
mongoConn()

const cors = require('cors')

app.use(express.urlencoded({extended : false}))
app.use(express.json())
app.use(cors({
    origin : '*'
}))

const generos = require('./routes/generoRouter')
const directores = require('./routes/directorRouter')
const media = require('./routes/mediaRouter')
const productoras = require('./routes/productoraRouter')
const tiposMultimedia = require('./routes/tipoMultimediaRouter')

app.use('/api/v1/generos', generos)
app.use('/api/v1/directores', directores)
app.use('/api/v1/media', media)
app.use('/api/v1/productoras', productoras)
app.use('/api/v1/tiposMultimedia', tiposMultimedia)

module.exports = app