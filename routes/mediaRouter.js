const {Router} = require ('express')
const {crearMedia,consultarMedia,editarMediaPorId,eliminarMediaPorId} = require ('../controllers/mediaController')
const {validarJTW} = require('../middleware/validar-jwt')
const {validarRolAdmin} = require('../middleware/validar-rol-admin')
const router = Router()

router.post('/', [validarJTW, validarRolAdmin], crearMedia)
router.get('/', [validarJTW], consultarMedia)
router.put('/:id', [validarJTW, validarRolAdmin], editarMediaPorId)
router.delete('/:id', [validarJTW, validarRolAdmin], eliminarMediaPorId)

module.exports = router