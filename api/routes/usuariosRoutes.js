const {Router} = require('express')
const UsuarioController = require('../controllers/usuarioController')
const autenticado = require('../middleware/autenticado')


const router = Router()


router
    .post('/usuarios', UsuarioController.cadastrar)
    .get('/usuarios', UsuarioController.buscarTodosUsuarios)
    .get('/usuarios/id/:id', UsuarioController.buscarUsuarioPorId)
    .put('/usuarios/id/:id')
    .delete('/usuarios/id/:id')

module.exports = router