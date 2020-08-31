const express = require("express");
require("./DB");
const bodyParser=require("body-parser");
const cors = require("cors");
const app = express();

const swaggerUI = require("swagger-ui-express");
// const {swaggerDocument} from "./swagger";
// import * as controllers from './controllers';

const Contrato = require('./Contrato');

app.use(cors());    
app.use(bodyParser.json());

const  handleError=(res,msg)=>{
    return err=>{
         console.log(err);
         res.status(500).json({"error":msg});
    };
};

const  handleSucess=(res,msg)=>{
    return()=>{
         res.json({"ok":msg});
    };
};


app.get('/contratos', (req,res)=>{
    Contrato.find().then(dados =>{
            // let retorno = dados.map(({codigo,nome,preco,imagem})=>{
            //  return  {codigo,nome,preco,imagem};
            // });
         
            res.json(dados);       
        })
         .catch(handleError(res, "Error ao Listar os Contratos" ));
});



app.post('/contratos', (req,res)=>{
     let contrato = req.body;
     Contrato.create(contrato)
          .then(dados =>{
                     res.json({"msg":"dados gravados"});       
        })
         .catch(handleError(res, "Error ao Listar ao Gravar Contrato" ));
});

app.get('/contratos/:codigo', (req,res)=>{
      let vcodigo = req.params.codigo;
    Contrato.findOne({codigo:vcodigo}).then(dados =>{
            res.json(dados);       
        })
         .catch(handleError(res, {"msg":"-1"} ));
});

app.put('/contratos/:id', (req,res)=>{
    let corpo = req.body;
    let vid =  req.params.id;
    
    Contrato.findOneAndUpdate({_id:vid},
           corpo, {upsert:true}, function(err, result){
          if (err){
            handleError(res, {"msg":"Erro de Alteracao"} );
          }
          if (result){
              res.send(result);
          }
    }
    )
     
});

app.listen(3014, ()=>{
   console.log('Rodou na porta 3014');
});  





