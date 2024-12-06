const {Router} = require ('express')
const {crearProductora,consultarProductoras,editarProdcutoraporId} = require ('../controllers/productoraController')
const {validarJTW} = require('../middleware/validar-jwt')
const {validarRolAdmin} = require('../middleware/validar-rol-admin')
const router = Router()

router.post('/', [validarJTW, validarRolAdmin], crearProductora)
router.get('/', [validarJTW, validarRolAdmin], consultarProductoras)
router.put('/:id', [validarJTW, validarRolAdmin], editarProdcutoraporId)

module.exports = router