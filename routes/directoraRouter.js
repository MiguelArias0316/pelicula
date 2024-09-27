const {Router} = require ('express')
const {crearDirector,consultarDirectores,editarDirectorPorId} = require ('../controllers/directoraController')

const router = Router()

router.post('/', crearDirector)
router.get('/', consultarDirectores)
router.put('/', editarDirectorPorId)

module.exports = router