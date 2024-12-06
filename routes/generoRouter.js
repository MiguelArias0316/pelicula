const {Router} = require ('express')
const {crearGenero,consultarGeneros,editarGeneroPorId} = require ('../controllers/generoController')
const {validarJTW} = require('../middleware/validar-jwt')
const {validarRolAdmin} = require('../middleware/validar-rol-admin')
const router = Router()

router.post('/', [validarJTW, validarRolAdmin], crearGenero)
router.get('/', [validarJTW, validarRolAdmin], consultarGeneros)
router.put('/:id', [validarJTW, validarRolAdmin], editarGeneroPorId)

module.exports = router