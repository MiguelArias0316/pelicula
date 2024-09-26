const mongoose = require('mongoose')

const mongoConn = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: 'peliculasdb'
        })
        console.log('Conexion a la base de datos exitosa')
    }catch(e){
        console.log('Error', e)
        throw new Error ('Error de conexión a la base de datos')
    }
}
module.exports = {mongoConn}