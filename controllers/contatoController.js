
const asyncHandler = require('express-async-handler');
const Contato = require('../models/contatoModel');

const getContatos = asyncHandler(async(req, res) => {
  const contatos = await Contato.find();
  res.status(200).json(contatos);
});

const getContatoPorId = asyncHandler(async(req, res) => {
  res.status(200).json({message: 'Get contato por id'});
});

const cadastrarContato = asyncHandler(async(req, res) => {
  console.log('O corpo da requisição é: ', req.body);
  const {nome,email,telefone} = req.body;

  if (!nome || !email || !telefone) {
    res.status(400);
    throw Error('Preencha todos os campos');
  }
  
  const contato = await Contato.create({
    nome,
    email,
    telefone
  });
  
  res.status(201).json(contato);
});

const atualizarContato = asyncHandler(async(req, res) => {
  res.status(201).json({message: 'Atualizar contato por id'});
});

const deletarContato = asyncHandler(async(req, res) => {
  res.status(201).json({message: 'Deletar(contato) por id'});
});

module.exports = {
  getContatos,
  getContatoPorId,
  cadastrarContato,
  atualizarContato,
  deletarContato
};