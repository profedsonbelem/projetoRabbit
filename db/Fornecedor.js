const mongoose = require("mongoose");
const moment = require('moment');


const schema = mongoose.Schema({
    
   
    id: {
        "type": "number"
    },
    cnpj: {
        "type": "number"
    },
    nome:{
        "type": "string"
    },
    razaoSocial:{
        "type": "string"
    },
    possuiSupervisor:{
        "type": "boolean"
    },
    codigo:{
        "type": "number"
    },
    email:{
        "type": "string"
    },
    indAtivo:{
        "type": "mixed"
    },
    indLiberacaoColaborador:{
        "type": "mixed"
    }
    

},{ collection: 'fornecedores' });

schema.pre('save', function (next) {
    console.log('passei')
    next();
  
  })

const Fornecedor = mongoose.model('fornecedores', schema);
module.exports = Fornecedor;





