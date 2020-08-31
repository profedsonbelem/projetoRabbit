npm i body-parser
npm i express
npm i mongoose
npm i cors

-----------------------------------
windows (c:/data/db)
c:/data/db
--mongod
--mongo
entrar no bin no mongodb ...

----------------------------
sudo mongod
sudo mongo

use bdmongoose;

db.produtos.insertMany([
{ 
    "codigo":10,
    "nome":"havaianas",
    "preco":40,
    "imagem":"https://havainas.vteximg.com.br/arquivos/ids/233870-583-439/4001280_0031_C_chinelos_havaianas_tradicional_azul.jpg" 
 },{
    "codigo":11,
    "nome":"caneca",
    "preco":80,
    "imagem":"https://cdn.awsli.com.br/600x450/608/608801/produto/27768511/d3aea2373e.jpg" 
 }
  ]);

  db.produtos.find();
  db.produtos.find().pretty();


    db.produtos.findOne({"codigo":11});


==================


npm install -g typescript

tsc  vira js

npm install typescript@2.0.6 --save-dev
-


 "outDir": "dist"


 ===============

  db.mensage.find().forEach( function(x){db.contratos.insert(x)} );
