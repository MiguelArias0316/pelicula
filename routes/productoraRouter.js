const {Router} = require ('express')
const {crearProductora,consultarProductoras,editarProdcutoraporId} = require ('../controllers/productoraController')

const router = Router()

router.post('/', crearProductora)
router.get('/', consultarProductoras)
router.put('/', editarProdcutoraporId)

module.exports = router