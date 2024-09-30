const {Router} = require ('express')
const {crearGenero,consultarGeneros,editarGeneroPorId} = require ('../controllers/generoController')

const router = Router()

router.post('/', crearGenero)
router.get('/', consultarGeneros)
router.put('/:id', editarGeneroPorId)

module.exports = router