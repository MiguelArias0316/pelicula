const {Router} = require ('express')
const {crearGenero} = require ('../controllers/generoController')

const router = Router()

router.post('/', crearGenero)

module.exports = router