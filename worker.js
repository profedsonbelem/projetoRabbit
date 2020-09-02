var amqp = require('amqplib/callback_api');
const express = require('express');
var MongoClient = require("mongodb").MongoClient;
var bodyParser = require('body-parser');
const assert = require('assert');
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const queue = require("./queue");
const CryptoJS = require('crypto-js');
var app = express();
let obj = {}

amqp.connect('amqp://hadministradora:h4Dm1n44@10.190.4.17', function (err, conn) {
    conn.createChannel(function (err, ch) {
        var q = 'Roots.HAdministradora.PosVenda.CadastroContratoBeneficiario';
        ch.assertQueue(q, { durable: false });
        ch.prefetch(1);
        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q);
        ch.consume(q, function
            (msg) {




            let privateKey = "ml}^*uQiQjsy#{(Z";

            let iv = CryptoJS.lib.WordArray.create([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
            console.log('iv: ', iv);

            this.keyHash = CryptoJS.SHA256(CryptoJS.enc.Utf8.parse(privateKey));
            console.log('keyHash: ', this.keyHash);

            let key = CryptoJS.lib.WordArray.create(this.keyHash.words.slice(0, 8), 32);
            console.log('key: ', key);

            let cipherBuffer = CryptoJS.enc.Base64.parse(msg.content.toString());
            console.log('cipherBuffer: ', cipherBuffer);

            let cfg = { iv: iv };
            console.log('cfg: ', cfg);

            let paramsData = {
                ciphertext: cipherBuffer
            };
            console.log('ParamsData: ', paramsData);
            let decrypted = CryptoJS.AES.decrypt(msg.content.toString(), key, cfg);
            console.log('decrypted: ', decrypted);

            let resp = decrypted.toString(CryptoJS.enc.Utf8);
            console.log('resp: ', resp);
            

            console.log('decript: ', decrypted.toString(CryptoJS.enc.Utf8));
            //  JSON.stringify(this.resp);
            // return decrypted.toString(CryptoJS.enc.Utf8);
            // res.status(200).send({ "Decriptografou": decrypted.toString(CryptoJS.enc.Utf8) });


            //
            console.log(" Recebido e decriptografado ", decrypted.toString(CryptoJS.enc.Utf8));
            MongoClient.connect(url, function (err, database) {
                if (err) {
                    console.log('Erro: ', err);
                } else {
                    var db = database.db("marlin01");
                    var collection = db.collection("mensage");
                    console.log(msg.content.toString());
                    collection.insertMany([{ conteudos_beneficiarios: JSON.parse(decrypted.toString(CryptoJS.enc.Utf8)) }], function (err, documents) {
                        console.log({ error: err, affected: documents });
                    });

                    // var db2 = database.db("marlin01");
                    // var collection = db2.collection("mensage");

                    // collection.find().forEach( function(x){db.contratos.insert(x)} );
                    collection.find().forEach(x => { collection.insertOne(x) });



                }
                database.close();
            });


        }, { noAck: true });
    });
});


module.exports= obj;

