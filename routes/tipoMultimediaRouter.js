const {Router} = require ('express')
const {crearTipoMultimedia,consultarTiposMultimedia} = require ('../controllers/tipoMultimediaController')

const router = Router()

router.post('/', crearTipoMultimedia)
router.get('/', consultarTiposMultimedia)

module.exports = router