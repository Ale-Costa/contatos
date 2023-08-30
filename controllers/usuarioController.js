const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const Usuario = require('../models/usuarioModel');

const registrarUsuario = asyncHandler(async(req, res) => {
  const {username, email, password} = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error('Preencha todos os campos');
  }

  const usuarioJaCadastrado = await Usuario.findOne({email});

  if (usuarioJaCadastrado) {
    res.status(400);
    throw new Error('Email já cadastrado');
  }

  try {
    const hashPassword = await bcrypt.hash(password, 10);
    const novoUsuario = await Usuario.create({
      username,
      email,
      password: hashPassword
    });

    res.status(201).json({
      _id: novoUsuario.id,
      email: novoUsuario.email,
      username: novoUsuario.username
    });
    throw new Error('');

  } catch (error) {
    throw new Error('Não foi possível cadastrar o usuário');
  }

});

const login = asyncHandler(async (req, res) => {
  res.json({message: 'Login realizado com sucesso'});
});

const usuarioLogado = asyncHandler(async(req, res) => {
  res.json({message: 'Usuario logado'});
});
  
module.exports = {
  registrarUsuario,
  login,
  usuarioLogado
};