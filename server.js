const express = require("express");
require("./DB");
const Contrato = require('./Contrato');
const router = express.Router();
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
require('./utils/redis')
const cors = require("cors");
const User = require("./controller/user");
const obj = require("./worker");
var app = express();


app.use(cors())
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const handleError = (res, msg) => {
	return err => {
		console.log(err);
		res.status(500).json({ "error": msg });
	};
};

const handleSucess = (res, msg) => {
	return () => {
		res.json({ "ok": msg });
	};
};



var createContrato = function (req, res, next) {
	var contrato = new Contrato(req.body);

	contrato.save(function (err) {
		if (err) {
			next(err);
		} else {
			res.json(contrato);
		}
	});
};

var getFindContrato = function (req, res, next) {

	Contrato.find(function (err, contratos) {
		if (err) {
			next(err);
		} else {
			let obj ={}
			contratos.map(c => {
				obj.id = c._id;
				obj.contratos = contratos
			})
			res.json(obj);
		}
	});
};

var getFindByIDContrato = function (req, res, next) {
	let vcodigo = req.params.id;
	Contrato.findById({ _id: vcodigo }).then(dados => {
		res.json(dados);
	})
};

var getRabbitMQ = function (req, res, next) {
	let teste = obj
	console.log('obj',obj.decrypted)
		res.json({teste});
};



router.route('/contratos')
	.post(createContrato)
	.get(getFindContrato);

router.route('/contrato/:id')
	.get(getFindByIDContrato);

router.route('/api/InterfacedoCliente/Gravar')
	.post(User.create)

router.route('/api/InterfacedoCliente')
	.get(User.find);

router.route('/getRabbit')
	.get(getRabbitMQ)


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', router);

app.listen(3000);
module.exports = app;




