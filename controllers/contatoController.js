
const asyncHandler = require('express-async-handler');
const Contato = require('../models/contatoModel');

const getContatos = asyncHandler(async(req, res) => {
  const contatos = await Contato.find();
  res.status(200).json(contatos);
});

const getContatoPorId = asyncHandler(async(req, res) => {
  const contato = await Contato.findById(req.params.id);
  if(!contato){
    res.status(404);
    throw Error('Contato não encontrado');
  }
  res.status(200).json(contato);
});

const cadastrarContato = asyncHandler(async(req, res) => {
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
  const contato = await Contato.findById(req.params.id);
  if(!contato){
    res.status(404);
  }
  const contatoAtualizado = await Contato.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });

  res.status(201).json(contatoAtualizado);
});

const deletarContato = asyncHandler(async(req, res) => {
  const contato = await Contato.findById(req.params.id);

  if(!contato){
    res.status(404);
  }

  await Contato.remove();
  res.status(200).json(contato);
});

module.exports = {
  getContatos,
  getContatoPorId,
  cadastrarContato,
  atualizarContato,
  deletarContato
};