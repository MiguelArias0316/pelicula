const {Router} = require ('express')
const {crearDirector,consultarDirectores,editarDirectorPorId} = require ('../controllers/directorController')

const router = Router()

router.post('/', crearDirector)
router.get('/', consultarDirectores)
router.put('/:id', editarDirectorPorId)

module.exports = router