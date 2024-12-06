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
const usuarios = require('./routes/usuarioRouter')
const auth = require('./routes/authRouter')

app.use('/api/v1/generos', generos)
app.use('/api/v1/directores', directores)
app.use('/api/v1/media', media)
app.use('/api/v1/productoras', productoras)
app.use('/api/v1/tiposMultimedia', tiposMultimedia)
app.use('/api/v1/usuarios', usuarios)
app.use('/api/v1/login', auth)

module.exports = app