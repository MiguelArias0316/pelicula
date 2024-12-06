const {Router} = require ('express')
const {crearDirector,consultarDirectores,editarDirectorPorId} = require ('../controllers/directorController')
const {validarJTW} = require('../middleware/validar-jwt')
const {validarRolAdmin} = require('../middleware/validar-rol-admin')
const router = Router()

router.post('/', [validarJTW, validarRolAdmin], crearDirector)
router.get('/', [validarJTW, validarRolAdmin], consultarDirectores)
router.put('/:id', [validarJTW, validarRolAdmin], editarDirectorPorId)

module.exports = router