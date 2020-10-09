const express = require("express");
require("./db/DB");
const Contrato = require('./db/Contrato');
const router = express.Router();
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
// require('./utils/redis')
const cors = require("cors");
var app = express();
const ICliente = require('./src/model/InterfacedoCliente');
const https = require('https');
const fs = require('fs');
const { credentials } = require("amqplib/callback_api");
const axios = require('axios');
const moment = require('moment');
const { string } = require("joi");
const Utils = require("./utils/utils");
var CronJob = require('cron').CronJob;





// const options = {
// 	key: fs.readFileSync('key.pem'),
// 	cert: fs.readFileSync('cert.pem')
// };



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

	let cliente = req.body;
	let dataNascimento = moment(cliente.titular.dataNascimento).format('DD/MM/YYYY')
	let contrato = new Contrato(req.body);


	contrato.save(async function (err) {

		if (err) {
			next(err);
		} else {
			// await axios.post('https://prjqualivida.mxmwebmanager.com.br/api/InterfacedoCliente/Gravar', {
			// 	AutheticationToken: {
			// 		Username: "TESTEAPI.QUA",
			// 		Password: "TST90",
			// 		EnvironmentName: "QUALIVIDAPROJ"
			// 	},
			// 	Data: {
			// 		InterfacedoCliente: [
			// 			{
			// 				SequenciadoRegistro: 1,
			// 				Codigo: cliente.titular.id,
			// 				TipodePessoa: "F",
			// 				Nome: cliente.titular.nome,
			// 				CPFouCNPJ: cliente.titular.cpf,
			// 				NomeFantansia: "",
			// 				TipodoLocaldoIndicadordeInscricaoEstadual: "9",
			// 				Inscricao: "",
			// 				InscricaoMunicipal: "",
			// 				InscricaoSuframa: "",
			// 				OrgaoExpeditor: "",
			// 				DatadaExpedicao: "",
			// 				DatadeNascimento: dataNascimento,
			// 				CodigodaNacionalidade: "",
			// 				EstadoCivil: cliente.titular.estadoCivil.descricao,
			// 				Profissao: cliente.titular.profissao.descricao,
			// 				CodigodoGrupo: "",
			// 				CodigodoPais: "",
			// 				Cep: cliente.titular.endereco.cep,
			// 				Endereco: cliente.titular.endereco.logradouro,
			// 				NumerodoEndereco: cliente.titular.endereco.numero,
			// 				ComplementodoEndereco: cliente.titular.endereco.complemento,
			// 				Bairro: cliente.titular.endereco.bairro,
			// 				Uf: cliente.titular.endereco.uf,
			// 				Cidade: cliente.titular.endereco.cidade,
			// 				Email: cliente.titular.email,
			// 				Telefone: cliente.titular.numCelular,
			// 				CodigodaCidade: "3304557",
			// 				Ativo: "A",
			// 				DatadoCadastro: "",
			// 				DatadeAtualizacao: "",
			// 				DatadeInativacao: "",
			// 				Pais: "Brasil",
			// 				InterfaceContaCorrentedoCliente: [
			// 					{
			// 						SequenciadaConta: 1,
			// 						CodigodoCliente: cliente.titular.id,
			// 						CodigodaContaCorrente: "001",
			// 						CodigodoBanco: "341",
			// 						NomedoBanco: "",
			// 						AgenciadoBanco: "0740",
			// 						NomedaAgencia: "",
			// 						EnderecodaAgencia: "",
			// 						BairrodaAgencia: "",
			// 						CidadedaAgencia: "",
			// 						UFdaAgencia: "",
			// 						CepdaAgencia: "",
			// 						NumerodaContaBancaria: "62535-9",
			// 						TipodeConta: "",
			// 						Competencia: "",
			// 						OperacaodeIntegracao: ""
			// 					}
			// 				],
			// 				InterfaceEnderecodoCliente: [
			// 					{
			// 						SequenciaClienteEndereco: "1",
			// 						CodigoEnderecoAlternativo: "A01",
			// 						DescricaoEnderecoAlternativo: "Endereço de cobrança",
			// 						NomeCliente: cliente.titular.nome,
			// 						EnderecoAlernativo: "",
			// 						Numero: "",
			// 						Complemento: "",
			// 						Bairro: "",
			// 						Cidade: "",
			// 						UF: "RJ",
			// 						CEP: "",
			// 						Telefone: "",
			// 						CNPJ: "26782341859",
			// 						InscricaoEstadual: "",
			// 						CodigoRegiao: "",
			// 						Email: "",
			// 						InscricaoMunicipal: "",
			// 						InscricaoSUFRAMA: "",
			// 						CodigoCidadeIBGE: "",
			// 						CodigoPaisIBGE: "",
			// 						TipoLocalIndicadorInscricaoEstadual: "1",
			// 						OperacaodeIntegracao: ""
			// 					}
			// 				],
			// 				InterfaceContabildoCliente: [
			// 					{
			// 						CodigoCliente: cliente.titular.id,
			// 						CodigoEmpresa: "01",
			// 						CodigoFilial: "",
			// 						CodigoMoeda: "",
			// 						NumeroContaContabil: "",
			// 						NumeroContaContabilAntecipacao: "",
			// 						OperacaodeIntegracao: "",
			// 						InterfaceGrupoRecebimentodoCliente: [
			// 							{
			// 								CodigoCliente: cliente.titular.id,
			// 								CodigoEmpresa: "01",
			// 								CodigoFilial: "",
			// 								CodigoMoeda: "",
			// 								CodigoGrupoRecebimento: "310053",
			// 								CodigoImpostoIRRF: "",
			// 								CodigoImpostoINSS: "",
			// 								CodigoImpostoISS: "",
			// 								CodigoImpostoPIS: "",
			// 								CodigoImpostoCOFINS: "",
			// 								CodigoImpostoContribuicaoSocial: "",
			// 								IndicadorGrupoPrincipal: "",
			// 								IdentificadorTipoServico: "",
			// 								CodigoAtividadeEconomica: ""
			// 							}
			// 						]
			// 					}
			// 				]
			// 			}
			// 		]
			// 	}
			// }).then(resp => {
			// 	res.json({ "resposta Servidor MXM": resp.data.Messages[0], "Dados Enviados": JSON.parse(resp.config.data), "Processo :": resp.data.Data });
			// })
		}
	});
};

var getFindContrato = function (req, res, next) {
	let administradora = req.query.administradora;
	let operadora = req.query.operadora;
	let dataNascimento = req.query.dataNascimento;
	let nomeTitular = req.query.nomeTitular;
	let entidade = req.query.entidade;
	let skip = req.query.skip;

	if (administradora || operadora || dataNascimento || nomeTitular || entidade) {
		
		let primeiro = Utils.retornaCampo(1, administradora);
		let segundo = Utils.retornaCampo(2, operadora)
		let terceiro = Utils.retornaCampo(3, dataNascimento);
		let quarto = Utils.retornaCampo(4, nomeTitular)
		let quinto = Utils.retornaCampo(5, entidade);

		Contrato.find({ $and: [primeiro, segundo, terceiro, quarto, quinto] }).skip(1).limit(0)
			.then(resp => {
				res.json(resp);
			})
	} else {
		Contrato.find(function (err, contratos) {
			if (err) {
				next(err);
			} else {
				res.json(contratos);
			}
		}).skip(parseInt(skip)).limit(2);
	}
};

var getFindByIDContrato = function (req, res, next) {
	let vcodigo = req.params.id;
	Contrato.findById({ _id: vcodigo }).then(dados => {
		res.json(dados);
	})
};

var postContratoCobranca = function (req, res, next) {
	let vcodigo = req.params.id;

	Contrato.findById({ _id: vcodigo }).then(data => {
		let dataVencimento = moment(data.titular.dataVencimento).format('DDMMYYYY')
		let dataVigencia = moment(data.titular.dataVigencia).format('DDMMYYYY')

		axios.post('https://prjqualivida.mxmwebmanager.com.br/api/InterfacedoContasPagarReceber/Gravar', {
			AutheticationToken: {
				Username: "TESTEAPI.QUA",
				Password: "TST90",
				EnvironmentName: "QUALIVIDAPROJ"
			},
			Data: {
				InterfacedoContasPagarReceber: [
					{
						SequenciadoRegistro: data.subcontrato.id,
						Identificacao: "PR",
						CodigoClienteFornecedor: data.titular.id,
						NumerodoTitulo: data.subcontrato.id,
						DocumentoFiscal: "",
						EmpresaEmitente: "001",
						Filial: "",
						EmpresaRecebedora: "001",
						TipodeTitulo: "RP",
						DatadeEmissao: dataVigencia,
						DatadeVencimento: dataVencimento,
						DatadaProgramacao: dataVencimento,
						CodigodaMoeda: "BRL",
						ValordoTitulo: "",
						TipodeCobranca: "BL",
						Banco: "",
						Agencia: "",
						Portador: "",
						Observacao: "",
						ValordeDesconto: "",
						DatadoDesconto: "",
						ValordeBonificacao: "",
						ValordePermanencia: "",
						ValordeMulta: "",
						ValordeAntecipacao: "",
						CodigodoIRRF: "",
						ValordoIRRF: "",
						CodigodoINSS: "",
						ValordoINSS: "",
						CodigodoISS: "",
						ValordoISS: "",
						EnderecodeCobranca: "",
						CondicaodePagamento: "",
						CodigodoPIS: "",
						ValordoPIS: "",
						CodigodoCOFINS: "",
						ValordoCOFINS: "",
						CodigodaContribuicaoSocial: "",
						ValordaContribuicaoSocial: "",
						DatadaEntrada: "",
						FormadePagamento: "",
						CodigodoINSSI: "",
						INSSIDED: "",
						ValordeCotacaodaProvisao: "",
						CodigodaContaDocumento: "",
						NumerodoCheque: "",
						Nominal: "",
						ChequeNominal: "",
						BaixadeCheque: "",
						DatadeCompetencia: "",
						CodigodeControle: "",
						BasedeCalculoIRRF: "",
						BasedeCalculoINSS: "",
						BasedeCalculoISS: "",
						BasedeCalculoPIS: "",
						BasedeCalculoCOFINS: "",
						BasedeCalculoCSOCIAL: "",
						BasedeCalculoINSSI: "",
						BasedeCalculoSEST: "",
						DatadeCredito: "",
						NomeArquivoExtencao: "",
						InterfaceGrupoPagarReceber: [
							{
								CodigodoFornecedor: "07930849000103",
								NumerodoTitulo: data.subcontrato.id,
								CodigodoGrupo: "101.1",
								NumerodoCentrodeCusto: "",
								ValordoGrupo: "1500,00",
								PlanodeCentrodeCusto: "",
								PlanodeFluxodeCaixa: "",
								ContadoFluxodeCaixa: "",
								Historico: "",
								CodigodoProjeto: ""
							}
						],
						InterfaceAcrescimoDecrescimodoContasPagarReceber: [
							{
								CodigoClienteFornecedor: data.titular.id,
								NumerodoTitulo: data.subcontrato.id,
								CodigodoAcrescimoouDecrescimo: "02",
								ValordoAcrescimoouDecresimo: "55,00"
							}
						]
					}
				]
			}
		}).then(resp => {
			res.json({ "resposta Servidor MXM": resp.data.Messages[0], "Dados Enviados": JSON.parse(resp.config.data), "Processo :": resp.data.Data });
		})

	})
};

var getTitulo = function (req, res, next) {

	let cliente = req.params.id
	Contrato.find().then(data => {
		// let job = new CronJob('00 57 11 29 * *', function () {
		axios.post('https://prjqualivida.mxmwebmanager.com.br/api/InterfacedoContasPagarReceber/ConsultaTituloReceber', {

			AutheticationToken: {
				Username: "TESTEAPI.QUA",
				Password: "TST90",
				EnvironmentName: "QUALIVIDAPROJ"
			},
			Data: {
				Cliente: cliente,
				NumeroTitulo: "",
				DocumentoFiscal: "",
				CodigoSRF: "",
				CodigoCondicaoPagamento: "",
				CodigoTipoTitulo: "",
				CodigoTituloCobranca: "",
				EmpresaEmitente: "",
				CodigoFilial: "",
				CodigoEmpresaPagadora: "",
				SqProcesso: ""
			}
		}).then(resp => {
			res.json({ "resposta Servidor MXM": resp.data.Messages[0], "Dados Enviados": JSON.parse(resp.config.data), "Processo :": resp.data.Data });
		})
		// }, null, true, 'America/Sao_Paulo');
		// job.start();
	})
};

var getCarteirinha = function (req, res, next) {
	let carteirinha = parseInt(req.params.carteirinha)

	Contrato.findOne({ $and: [{ "titular.numeroCarteirinha": carteirinha }] }).then(resp => {
		res.json(resp);
	})
};

var getCPF = function (req, res, next) {
	let cpf = req.params.cpf
	Contrato.findOne({ $and: [{ "titular.cpf": cpf }] }).then(resp => {
		res.json(resp);
	})
};

var getProposta = function (req, res, next) {
	let proposta = req.params.proposta

	Contrato.findOne({ "numeroProposta": proposta }).then(data => {
		res.json(data);
	})
};





router.route('/contrato_beneficiario')
	.post(createContrato)
	.get(getFindContrato);

router.route('/contrato_beneficiario/:id')
	.get(getFindByIDContrato);

router.route('/contrato_beneficiario/:id/cobrancas')
	.post(postContratoCobranca);


router.route('/contrato_beneficiario/:id/titulos')
	.get(getTitulo);

router.route('/contrato_beneficiario/:cpf/cpf')
	.get(getCPF);

router.route('/contrato_beneficiario/:proposta/proposta')
	.get(getProposta);


router.route('/contrato_beneficiario/:carteirinha/carteirinha')
	.get(getCarteirinha);


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', router);

// https.createServer(options,app).listen(3000)
app.listen(3000)
module.exports = app;




