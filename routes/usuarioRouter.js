const {Router} = require ('express')
const {crearUsuario,consultarUsuarios,editarUsuarioPorId,eliminarUsuarioPorId} = require ('../controllers/usuarioController')

const router = Router()

router.post('/', crearUsuario)
router.get('/', consultarUsuarios)
router.put('/:id', editarUsuarioPorId)
router.delete('/:id', eliminarUsuarioPorId)

module.exports = router