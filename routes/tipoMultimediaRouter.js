const {Router} = require ('express')
const {crearTipoMultimedia,consultarTiposMultimedia} = require ('../controllers/tipoMultimediaController')
const {validarJTW} = require('../middleware/validar-jwt')
const {validarRolAdmin} = require('../middleware/validar-rol-admin')
const router = Router()

router.post('/', [validarJTW, validarRolAdmin], crearTipoMultimedia)
router.get('/', [validarJTW, validarRolAdmin], consultarTiposMultimedia)

module.exports = router