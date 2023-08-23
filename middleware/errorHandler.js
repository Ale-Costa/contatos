const {constants} = require('../constants');
const errorHandler = (err, req,res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
  case constants.VALIDATION_ERROR:
    res.json({title:'Falha na validação', message: err.message, stacktrace: err.stack});
    break;
  case constants.NOT_FOUND:
    res.json({title:'Não encontrado', message: err.message, stacktrace: err.stack});
    break;
  case constants.UNAUTHORIZED:
    res.json({title:'Não autorizado', message: err.message, stacktrace: err.stack});
    break;
  case constants.INTERNAL_SERVER_ERROR:
    res.json({title:'Erro no servidor', message: err.message, stacktrace: err.stack});
    break;
  case constants.FORBIDDEN:
    res.json({title:'Acesso negado', message: err.message, stacktrace: err.stack});
    break;
  default:
    console.log('Sem erro');
    
  }
};

module.exports = errorHandler;