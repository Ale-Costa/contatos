const mongoose = require('mongoose');
const contatoSchema = mongoose.Schema({
  nome:{
    type: String,
    required: [true, 'Por favor insira o nome do contato']
  },
  email:{
    type: String,
    required: [true, 'Por favor insira o email do contato']
  },
  telefone:{
    type: String,
    required: [true, 'Por favor insira o telefone do contato']
  },

},{
  timestamps: true
});

module.exports = mongoose.model('Contato', contatoSchema);

