const {Router} = require ('express')
const {crearMedia,consultarMedia,editarMediaPorId,eliminarMediaPorId} = require ('../controllers/mediaController')

const router = Router()

router.post('/', crearMedia)
router.get('/', consultarMedia)
router.put('/:id', editarMediaPorId)
router.delete('/:id', eliminarMediaPorId)

module.exports = router