const express = require('express');
const connectDb = require('./config/dbConnection');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require('dotenv').config();

connectDb();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/contatos',require('./routes/contatoRoutes'));
app.use('/api/usuarios',require('./routes/usuarioRoutes'));
app.use(errorHandler);

app.listen(port, ()=> {
  console.log(`Servidor rodando na porta ${port}`);
});