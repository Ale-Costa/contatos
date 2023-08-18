const express = require('express');
const dotenv = require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use('/api/contatos',require('./routes/contatoRoutes'));

app.listen(port, ()=> {
  console.log(`Servidor rodando na porta ${port}`);
});