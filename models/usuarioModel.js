const mongoose = require('mongoose');

const usuarioSchema = mongoose.Schema({
  username:{
    type: String,
    required:[true, 'Por favor insira o nome do usuario'],
  },
  email: {
    type: String,
    required: [true, 'Por favor insira o email do usuario'],
    unique: [true, 'Email já cadastrado'],
  },
  password:{
    type: String,
    required: [true, 'Por favor insira a senha do usuario']
  }
},{
  timestamps: true
});

module.exports = mongoose.model('Usuario', usuarioSchema);