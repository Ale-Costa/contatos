const express = require('express');
const router = express.Router();
const {registrarUsuario, login, usuarioLogado} = require('../controllers/usuarioController');


router.post('/registrar',registrarUsuario );

router.post('/login',login );

router.get('/usuarioLogado',usuarioLogado );

module.exports = router;
