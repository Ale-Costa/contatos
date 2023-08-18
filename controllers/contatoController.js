const getContatos = (req, res) => {
  res.status(200).json({message: 'Get todos contatos'});
};

const getContatoPorId = (req, res) => {
  res.status(200).json({message: 'Get contato por id'});
};

const cadastrarContato = (req, res) => {
  res.status(201).json({message: 'Cadastrar contato'});
};

const atualizarContato = (req, res) => {
  res.status(201).json({message: 'Atualizar contato por id'});
};

const deletarContato = (req, res) => {
  res.status(201).json({message: 'Deletar(contato) por id'});
};

module.exports = {
  getContatos,
  getContatoPorId,
  cadastrarContato,
  atualizarContato,
  deletarContato
};