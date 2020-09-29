const User = require('../models/user');
const clienteAuth = require('../models/cliente');
const InterfaceContabilidadedoCliente = require('../entity/InterfaceContabildoCliente')
const InterfaceContaCorrentedoCliente = require('../entity/InterfaceContaCorrentedoCliente')
const InterfacedoCliente = require('../entity/InterfacedoCliente')
const InterfaceGrupoRecebimentodoCliente = require('../entity/InterfaceGrupoRecebimentodoCliente')
const InterfaceEnderecodoCliente = require('../entity/InterfaceEnderecodoCliente')


module.exports = {
    create: async (req, res) => {
        
        const { Data, AutheticationToken } = req.body;

        let intContabilidadeCli = new InterfaceContabilidadedoCliente()
        let intCli = new InterfacedoCliente();
        let intCCCli = new InterfaceContaCorrentedoCliente();
        let intEndCli = new InterfaceEnderecodoCliente();
        let intGrupoRec = new InterfaceGrupoRecebimentodoCliente();

        let Username = AutheticationToken.Username
        let Password = AutheticationToken.Password
        let EnvironmentName = AutheticationToken.EnvironmentName

        Data.InterfacedoCliente.map(inter => {
            intCli.SequenciadoRegistro = inter.SequenciadoRegistro
            intCli.Codigo = inter.Codigo
            intCli.TipodePessoa = inter.TipodePessoa
            intCli.Nome = inter.Nome
            intCli.CPFouCNPJ = inter.CPFouCNPJ
            intCli.NomeFantansia = inter.NomeFantansia
            intCli.TipodoLocaldoIndicadordeInscricaoEstadual = inter.TipodoLocaldoIndicadordeInscricaoEstadual
            intCli.Inscricao = inter.Inscricao
            intCli.InscricaoMunicipal = inter.InscricaoMunicipal
            intCli.InscricaoSuframa = inter.InscricaoSuframa
            intCli.OrgaoExpeditor = inter.OrgaoExpeditor
            intCli.DatadaExpedicao = inter.DatadaExpedicao
            intCli.DatadeNascimento = inter.DatadeNascimento
            intCli.CodigodaNacionalidade = inter.CodigodaNacionalidade
            intCli.EstadoCivil = inter.EstadoCivil
            intCli.Profissao = inter.Profissao
            intCli.CodigodoGrupo = inter.CodigodoGrupo
            intCli.CodigodoPais = inter.CodigodoPais
            intCli.Cep = inter.Cep
            intCli.Endereco = inter.Endereco
            intCli.NumerodoEndereco = inter.NumerodoEndereco
            intCli.ComplementodoEndereco = inter.ComplementodoEndereco
            intCli.Bairro = inter.Bairro
            intCli.Uf = inter.Uf
            intCli.Cidade = inter.Cidade
            intCli.Email = inter.Email
            intCli.Telefone = inter.Telefone
            intCli.CodigodaCidade = inter.CodigodaCidade
            intCli.Ativo = inter.Ativo
            intCli.DatadoCadastro = inter.DatadoCadastro
            intCli.DatadeAtualizacao = inter.DatadeAtualizacao
            intCli.DatadeInativacao = inter.DatadeInativacao
            intCli.Pais = inter.Pais
            InterfaceCCCliente = inter.InterfaceContaCorrentedoCliente
            InterfaceCCCliente.map(icc => {
                intCCCli.SequenciadaConta = icc.SequenciadaConta
                intCCCli.CodigodoCliente = icc.CodigodoCliente
                intCCCli.CodigodaContaCorrente = icc.CodigodaContaCorrente
                intCCCli.CodigodoBanco = icc.CodigodoBanco
                intCCCli.NomedoBanco = icc.NomedoBanco
                intCCCli.AgenciadoBanco = icc.AgenciadoBanco
                intCCCli.NomedaAgencia = icc.NomedaAgencia
                intCCCli.EnderecodaAgencia = icc.EnderecodaAgencia
                intCCCli.BairrodaAgencia = icc.BairrodaAgencia
                intCCCli.CidadedaAgencia = icc.CidadedaAgencia
                intCCCli.UFdaAgencia = icc.UFdaAgencia
                intCCCli.CepdaAgencia = icc.CepdaAgencia
                intCCCli.NumerodaContaBancaria = icc.NumerodaContaBancaria
                intCCCli.TipodeConta = icc.TipodeConta
                intCCCli.Competencia = icc.Competencia
                intCCCli.OperacaodeIntegracao = icc.OperacaodeIntegracao
            })
            InterfaceEndereco = inter.InterfaceEnderecodoCliente
            InterfaceEndereco.map(iec => {
                intEndCli.SequenciaClienteEndereco = iec.SequenciaClienteEndereco
                intEndCli.CodigoEnderecoAlternativo = iec.CodigoEnderecoAlternativo
                intEndCli.DescricaoEnderecoAlternativo = iec.DescricaoEnderecoAlternativo
                intEndCli.NomeCliente = iec.NomeCliente
                intEndCli.EnderecoAlernativo = iec.EnderecoAlernativo
                intEndCli.Numero = iec.Numero
                intEndCli.Complemento = iec.Complemento
                intEndCli.Bairro = iec.Bairro
                intEndCli.Cidade = iec.Cidade
                intEndCli.UF = iec.UF
                intEndCli.CEP = iec.CEP
                intEndCli.Telefone = iec.Telefone
                intEndCli.CNPJ = iec.CNPJ
                intEndCli.InscricaoEstadual = iec.InscricaoEstadual
                intEndCli.CodigoRegiao = iec.CodigoRegiao
                intEndCli.Email = iec.Email
                intEndCli.InscricaoMunicipal = iec.InscricaoMunicipal
                intEndCli.InscricaoSUFRAMA = iec.InscricaoSUFRAMA
                intEndCli.CodigoCidadeIBGE = iec.CodigoCidadeIBGE
                intEndCli.CodigoPaisIBGE = iec.CodigoPaisIBGE
                intEndCli.TipoLocalIndicadorInscricaoEstadual = iec.TipoLocalIndicadorInscricaoEstadual
                intEndCli.OperacaodeIntegracao = iec.OperacaodeIntegracao
            })
            InterfaceContabildoCliente = inter.InterfaceContabildoCliente
            InterfaceContabildoCliente.map(iccli => {
                intContabilidadeCli.CodigoCliente = iccli.CodigoCliente
                intContabilidadeCli.CodigoEmpresa = iccli.CodigoEmpresa
                intContabilidadeCli.CodigoFilial = iccli.CodigoFilial
                intContabilidadeCli.CodigoMoeda = iccli.CodigoMoeda
                intContabilidadeCli.NumeroContaContabil = iccli.NumeroContaContabil
                intContabilidadeCli.NumeroContaContabilAntecipacao = iccli.NumeroContaContabilAntecipacao
                intContabilidadeCli.OperacaodeIntegracao = iccli.OperacaodeIntegracao
                InterfaceGRCliente = iccli.InterfaceGrupoRecebimentodoCliente
                InterfaceGRCliente.map(igrc => {
                    intGrupoRec.CodigoCliente = iccli.CodigoCliente
                    intGrupoRec.CodigoEmpresa = iccli.CodigoEmpresa
                    intGrupoRec.CodigoFilial = iccli.CodigoFilial
                    intGrupoRec.CodigoMoeda = iccli.CodigoMoeda
                    intGrupoRec.CodigoGrupoRecebimento = igrc.CodigoGrupoRecebimento
                    intGrupoRec.CodigoImpostoIRRF = igrc.CodigoImpostoIRRF
                    intGrupoRec.CodigoImpostoINSS = igrc.CodigoImpostoINSS
                    intGrupoRec.CodigoImpostoISS = igrc.CodigoImpostoISS
                    intGrupoRec.CodigoImpostoPIS = igrc.CodigoImpostoPIS
                    intGrupoRec.CodigoImpostoCOFINS = igrc.CodigoImpostoCOFINS
                    intGrupoRec.CodigoImpostoContribuicaoSocial = igrc.CodigoImpostoContribuicaoSocial
                    intGrupoRec.IndicadorGrupoPrincipal = igrc.IndicadorGrupoPrincipal
                    intGrupoRec.IdentificadorTipoServico = igrc.IdentificadorTipoServico
                    intGrupoRec.CodigoAtividadeEconomica = igrc.CodigoAtividadeEconomica

                })
            })



        })

        let logado = clienteAuth.filter((res) => {
            if (res.AutheticationToken.Username == Username && res.AutheticationToken.Password == Password && res.AutheticationToken.EnvironmentName == EnvironmentName) {
                return res;
            } else {
                return null
            }

        })[0]


        let user
        if (logado) {
            user = await User.create(
                {
                    InterfacedoCliente: [
                        {
                            SequenciadoRegistro: intCli.SequenciadoRegistro,
                            Codigo: intCli.Codigo,
                            TipodePessoa: intCli.TipodePessoa,
                            Nome: intCli.Nome,
                            CPFouCNPJ: intCli.CPFouCNPJ,
                            NomeFantansia: intCli.NomeFantansia,
                            TipodoLocaldoIndicadordeInscricaoEstadual: intCli.TipodoLocaldoIndicadordeInscricaoEstadual,
                            Inscricao: intCli.Inscricao,
                            InscricaoMunicipal: intCli.InscricaoMunicipal,
                            InscricaoSuframa: intCli.InscricaoSuframa,
                            OrgaoExpeditor: intCli.OrgaoExpeditor,
                            DatadaExpedicao: intCli.DatadaExpedicao,
                            DatadeNascimento: intCli.DatadeNascimento,
                            CodigodaNacionalidade: intCli.CodigodaNacionalidade,
                            EstadoCivil: intCli.EstadoCivil,
                            Profissao: intCli.Profissao,
                            CodigodoGrupo: intCli.CodigodoGrupo,
                            CodigodoPais: intCli.CodigodoPais,
                            Cep: intCli.Cep,
                            Endereco: intCli.Endereco,
                            NumerodoEndereco: intCli.NumerodoEndereco,
                            ComplementodoEndereco: intCli.ComplementodoEndereco,
                            Bairro: intCli.Bairro,
                            Uf: intCli.Uf,
                            Cidade: intCli.Cidade,
                            Email: intCli.Email,
                            Telefone: intCli.Telefone,
                            CodigodaCidade: intCli.CodigodaCidade,
                            Ativo: intCli.Ativo,
                            DatadoCadastro: intCli.DatadoCadastro,
                            DatadeAtualizacao: intCli.DatadeAtualizacao,
                            DatadeInativacao: intCli.DatadeInativacao,
                            Pais: intCli.Pais,
                            InterfaceContaCorrentedoCliente: [
                                {
                                    SequenciadaConta: intCCCli.SequenciadaConta,
                                    CodigodoCliente: intCCCli.CodigodoCliente,
                                    CodigodaContaCorrente: intCCCli.CodigodaContaCorrente,
                                    CodigodoBanco: intCCCli.CodigodoBanco,
                                    NomedoBanco: intCCCli.NomedoBanco,
                                    AgenciadoBanco: intCCCli.AgenciadoBanco,
                                    NomedaAgencia: intCCCli.NomedaAgencia,
                                    EnderecodaAgencia: intCCCli.EnderecodaAgencia,
                                    BairrodaAgencia: intCCCli.BairrodaAgencia,
                                    CidadedaAgencia: intCCCli.CidadedaAgencia,
                                    UFdaAgencia: intCCCli.UFdaAgencia,
                                    CepdaAgencia: intCCCli.CepdaAgencia,
                                    NumerodaContaBancaria: intCCCli.NumerodaContaBancaria,
                                    TipodeConta: intCCCli.TipodeConta,
                                    Competencia: intCCCli.Competencia,
                                    OperacaodeIntegracao: intCCCli.OperacaodeIntegracao
                                }
                            ],
                            InterfaceEnderecodoCliente: [
                                {
                                    SequenciaClienteEndereco: intEndCli.SequenciaClienteEndereco,
                                    CodigoEnderecoAlternativo: intEndCli.CodigoEnderecoAlternativo,
                                    DescricaoEnderecoAlternativo: intEndCli.DescricaoEnderecoAlternativo,
                                    NomeCliente: intEndCli.NomeCliente,
                                    EnderecoAlernativo: intEndCli.EnderecoAlernativo,
                                    Numero: intEndCli.Numero,
                                    Complemento: intEndCli.Complemento,
                                    Bairro: intEndCli.Bairro,
                                    Cidade: intEndCli.Cidade,
                                    UF: intEndCli.UF,
                                    CEP: intEndCli.CEP,
                                    Telefone: intEndCli.Telefone,
                                    CNPJ: intEndCli.CNPJ,
                                    InscricaoEstadual: intEndCli.InscricaoEstadual,
                                    CodigoRegiao: intEndCli.CodigoRegiao,
                                    Email: intEndCli.Email,
                                    InscricaoMunicipal: intEndCli.InscricaoMunicipal,
                                    InscricaoSUFRAMA: intEndCli.InscricaoSUFRAMA,
                                    CodigoCidadeIBGE: intEndCli.CodigoCidadeIBGE,
                                    CodigoPaisIBGE: intEndCli.CodigoPaisIBGE,
                                    TipoLocalIndicadorInscricaoEstadual: intEndCli.TipoLocalIndicadorInscricaoEstadual,
                                    OperacaodeIntegracao: intEndCli.OperacaodeIntegracao
                                }
                            ],
                            InterfaceContabildoCliente: [
                                {
                                    CodigoCliente: intContabilidadeCli.CodigoCliente,
                                    CodigoEmpresa: intContabilidadeCli.CodigoEmpresa,
                                    CodigoFilial: intContabilidadeCli.CodigoFilial,
                                    CodigoMoeda: intContabilidadeCli.CodigoMoeda,
                                    NumeroContaContabil: intContabilidadeCli.NumeroContaContabil,
                                    NumeroContaContabilAntecipacao: intContabilidadeCli.NumeroContaContabilAntecipacao,
                                    OperacaodeIntegracao: intContabilidadeCli.OperacaodeIntegracao,
                                    InterfaceGrupoRecebimentodoCliente: [
                                        {
                                            CodigoCliente: intGrupoRec.CodigoCliente,
                                            CodigoEmpresa: intGrupoRec.CodigoEmpresa,
                                            CodigoFilial: intGrupoRec.CodigoFilial,
                                            CodigoMoeda: intGrupoRec.CodigoMoeda,
                                            CodigoGrupoRecebimento: intGrupoRec.CodigoGrupoRecebimento,
                                            CodigoImpostoIRRF: intGrupoRec.CodigoImpostoIRRF,
                                            CodigoImpostoINSS: intGrupoRec.CodigoImpostoINSS,
                                            CodigoImpostoISS: intGrupoRec.CodigoImpostoISS,
                                            CodigoImpostoPIS: intGrupoRec.CodigoImpostoPIS,
                                            CodigoImpostoCOFINS: intGrupoRec.CodigoImpostoCOFINS,
                                            CodigoImpostoContribuicaoSocial: intGrupoRec.CodigoImpostoContribuicaoSocial,
                                            IndicadorGrupoPrincipal: intGrupoRec.IndicadorGrupoPrincipal,
                                            IdentificadorTipoServico: intGrupoRec.IdentificadorTipoServico,
                                            CodigoAtividadeEconomica: intGrupoRec.CodigoAtividadeEconomica
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            )

            return res.send({
                Success: true,
                Data: '821',
                Messages: [{
                    Message: "Operação realizada com sucesso! Sequencial do Processo: 821",
                    Detail: "",
                    Type: 2,
                    TypeMessage: "Mensagem",
                    ErrorLevel: 2,
                    Code: null
                }]
            })
        } else {
            return res.send({ err: 'Usuario incorreto' })
        }



    },

    find: async (req, res) => {
        const user = await User.find().cache({ expire: 10 });

        res.json(user);
    }

}