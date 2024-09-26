
const app = require('./app')

app.set('port', process.env.PORT)

app.get('*', (req, res) => {
    return res.status(404).json({msj: 'No found'})
})

app.listen(app.get('port'), () => {
    console.log(`corriendo por el puerto ${app.get('port')}`)
})