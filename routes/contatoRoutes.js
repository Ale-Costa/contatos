const express = require('express');
const router = express.Router();
const {
  getContatos,
  getContatoPorId,
  cadastrarContato,
  atualizarContato,
  deletarContato
} = require('../controllers/contatoController');

router.route('/').get(getContatos).post(cadastrarContato);
router.route('/:id').get(getContatoPorId).put(atualizarContato).delete(deletarContato);

module.exports = router;