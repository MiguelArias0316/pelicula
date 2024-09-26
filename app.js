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
app.use('/api/v1/generos', generos)

module.exports = app