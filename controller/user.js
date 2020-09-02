const User = require('../models/user');
const clienteAuth = require('../models/cliente');
module.exports = {
    create: async (req, res) => {
        // AutheticationToken
        const { Data, AutheticationToken } = req.body;

        // console.log('req.body ===' , req.body)
        let SequenciadoRegistro
        let Codigo
        let TipodePessoa
        let Nome
        let CPFouCNPJ
        let NomeFantansia
        let TipodoLocaldoIndicadordeInscricaoEstadual
        let Inscricao
        let InscricaoMunicipal
        let InscricaoSuframa
        let OrgaoExpeditor
        let DatadaExpedicao
        let DatadeNascimento
        let CodigodaNacionalidade
        let EstadoCivil
        let Profissao
        let CodigodoGrupo
        let CodigodoPais
        let Cep
        let Endereco
        let NumerodoEndereco
        let ComplementodoEndereco
        let Bairro
        let Uf
        let Cidade
        let Email
        let Telefone
        let CodigodaCidade
        let Ativo
        let DatadoCadastro
        let DatadeAtualizacao
        let DatadeInativacao
        let Pais
        //primeiro array
        let InterfaceContaCorrentedoCliente = []
        let SequenciadaConta
        let CodigodoCliente
        let CodigodaContaCorrente
        let CodigodoBanco
        let NomedoBanco
        let AgenciadoBanco
        let NomedaAgencia
        let EnderecodaAgencia
        let BairrodaAgencia
        let CidadedaAgencia
        let UFdaAgencia
        let CepdaAgencia
        let NumerodaContaBancaria
        let TipodeConta
        let Competencia
        let OperacaodeIntegracao
        //segundo array
        let InterfaceEnderecodoCliente = []
        let SequenciaClienteEndereco
        let CodigoEnderecoAlternativo
        let DescricaoEnderecoAlternativo
        let NomeCliente
        let EnderecoAlernativo
        let Numero
        let Complemento
        let BairroAlternativo
        let CidadeAlternativo
        let UFAlternativo
        let CEPAlternativo
        let TelefoneAlternativo
        let CNPJAlternativo
        let InscricaoEstadualAlternativo
        let CodigoRegiaoAlternativo
        let EmailAlternativo
        let InscricaoMunicipalAlternativo
        let InscricaoSUFRAMAAlternativo
        let CodigoCidadeIBGEAlternativo
        let CodigoPaisIBGEAlternativo
        let TipoLocalIndicadorInscricaoEstadualAlternativo
        let OperacaodeIntegracaoAlternativo
        //terceiro array
        let InterfaceContabildoCliente = [];
        let CodigoCliente
        let CodigoEmpresa
        let CodigoFilial
        let CodigoMoeda
        let NumeroContaContabil
        let NumeroContaContabilAntecipacao

        //array dentro do terceiro array
        let InterfaceGrupoRecebimentodoCliente = []

        let CodigoGrupoRecebimento
        let CodigoImpostoIRRF
        let CodigoImpostoINSS
        let CodigoImpostoISS
        let CodigoImpostoPIS
        let CodigoImpostoCOFINS
        let CodigoImpostoContribuicaoSocial
        let IndicadorGrupoPrincipal
        let IdentificadorTipoServico
        let CodigoAtividadeEconomica
        let Username = AutheticationToken.Username
        let Password = AutheticationToken.Password
        let EnvironmentName = AutheticationToken.EnvironmentName

        
        Data.InterfacedoCliente.map(inter => {
            SequenciadoRegistro = inter.SequenciadoRegistro
            Codigo = inter.Codigo
            TipodePessoa = inter.TipodePessoa
            Nome = inter.Nome
            CPFouCNPJ = inter.CPFouCNPJ
            NomeFantansia = inter.NomeFantansia
            TipodoLocaldoIndicadordeInscricaoEstadual = inter.TipodoLocaldoIndicadordeInscricaoEstadual
            Inscricao = inter.Inscricao
            InscricaoMunicipal = inter.InscricaoMunicipal
            InscricaoSuframa = inter.InscricaoSuframa
            OrgaoExpeditor = inter.OrgaoExpeditor
            DatadaExpedicao = inter.DatadaExpedicao
            DatadeNascimento = inter.DatadeNascimento
            CodigodaNacionalidade = inter.CodigodaNacionalidade
            EstadoCivil = inter.EstadoCivil
            Profissao = inter.Profissao
            CodigodoGrupo = inter.CodigodoGrupo
            CodigodoPais = inter.CodigodoPais
            Cep = inter.Cep
            Endereco = inter.Endereco
            NumerodoEndereco = inter.NumerodoEndereco
            ComplementodoEndereco = inter.ComplementodoEndereco
            Bairro = inter.Bairro
            Uf = inter.Uf
            Cidade = inter.Cidade
            Email = inter.Email
            Telefone = inter.Telefone
            CodigodaCidade = inter.CodigodaCidade
            Ativo = inter.Ativo
            DatadoCadastro = inter.DatadoCadastro
            DatadeAtualizacao = inter.DatadeAtualizacao
            DatadeInativacao = inter.DatadeInativacao
            Pais = inter.Pais
            InterfaceContaCorrentedoCliente = inter.InterfaceContaCorrentedoCliente
            InterfaceContaCorrentedoCliente.map(icc => {
                SequenciadaConta = icc.SequenciadaConta
                CodigodoCliente = icc.CodigodoCliente
                CodigodaContaCorrente = icc.CodigodaContaCorrente
                CodigodoBanco = icc.CodigodoBanco
                NomedoBanco = icc.NomedoBanco
                AgenciadoBanco = icc.AgenciadoBanco
                NomedaAgencia = icc.NomedaAgencia
                EnderecodaAgencia = icc.EnderecodaAgencia
                BairrodaAgencia = icc.BairrodaAgencia
                CidadedaAgencia = icc.CidadedaAgencia
                UFdaAgencia = icc.UFdaAgencia
                CepdaAgencia = icc.CepdaAgencia
                NumerodaContaBancaria = icc.NumerodaContaBancaria
                TipodeConta = icc.TipodeConta
                Competencia = icc.Competencia
                OperacaodeIntegracao = icc.OperacaodeIntegracao

            })
            InterfaceEnderecodoCliente = inter.InterfaceEnderecodoCliente
            InterfaceEnderecodoCliente.map(iec => {
                SequenciaClienteEndereco = iec.SequenciaClienteEndereco
                CodigoEnderecoAlternativo = iec.CodigoEnderecoAlternativo
                DescricaoEnderecoAlternativo = iec.DescricaoEnderecoAlternativo
                NomeCliente = iec.NomeCliente
                EnderecoAlernativo = iec.EnderecoAlernativo
                Numero = iec.Numero
                Complemento = iec.Complemento
                BairroAlternativo = iec.BairroAlternativo
                CidadeAlternativo = iec.CidadeAlternativo
                UFAlternativo = iec.UFAlternativo
                CEPAlternativo = iec.CEPAlternativo
                TelefoneAlternativo = iec.TelefoneAlternativo
                CNPJAlternativo = iec.CNPJAlternativo
                InscricaoEstadualAlternativo = iec.InscricaoEstadualAlternativo
                CodigoRegiaoAlternativo = iec.CodigoRegiaoAlternativo
                EmailAlternativo = iec.EmailAlternativo
                InscricaoMunicipalAlternativo = iec.InscricaoMunicipalAlternativo
                InscricaoSUFRAMAAlternativo = iec.InscricaoSUFRAMAAlternativo
                CodigoCidadeIBGEAlternativo = iec.CodigoCidadeIBGEAlternativo
                CodigoPaisIBGEAlternativo = iec.CodigoPaisIBGEAlternativo
                TipoLocalIndicadorInscricaoEstadualAlternativo = iec.TipoLocalIndicadorInscricaoEstadualAlternativo
                OperacaodeIntegracaoAlternativo = iec.OperacaodeIntegracaoAlternativo
            })
            InterfaceContabildoCliente = inter.InterfaceContabildoCliente
            InterfaceContabildoCliente.map(iccli => {
                CodigoCliente = iccli.CodigoCliente
                CodigoEmpresa = iccli.CodigoEmpresa
                CodigoFilial = iccli.CodigoFilial
                CodigoMoeda = iccli.CodigoMoeda
                NumeroContaContabil = iccli.NumeroContaContabil
                NumeroContaContabilAntecipacao = iccli.NumeroContaContabilAntecipacao
                OperacaodeIntegracao = iccli.OperacaodeIntegracao
                InterfaceGrupoRecebimentodoCliente = iccli.InterfaceGrupoRecebimentodoCliente
                InterfaceGrupoRecebimentodoCliente.map(igrc => {
                    CodigoCliente = iccli.CodigoCliente
                    CodigoEmpresa = iccli.CodigoEmpresa
                    CodigoFilial = iccli.CodigoFilial
                    CodigoMoeda = iccli.CodigoMoeda
                    CodigoGrupoRecebimento = igrc.CodigoGrupoRecebimento
                    CodigoImpostoIRRF = igrc.CodigoImpostoIRRF
                    CodigoImpostoINSS = igrc.CodigoImpostoINSS
                    CodigoImpostoISS = igrc.CodigoImpostoISS
                    CodigoImpostoPIS = igrc.CodigoImpostoPIS
                    CodigoImpostoCOFINS = igrc.CodigoImpostoCOFINS
                    CodigoImpostoContribuicaoSocial = igrc.CodigoImpostoContribuicaoSocial
                    IndicadorGrupoPrincipal = igrc.IndicadorGrupoPrincipal
                    IdentificadorTipoServico = igrc.IdentificadorTipoServico
                    CodigoAtividadeEconomica = igrc.CodigoAtividadeEconomica

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
                            SequenciadoRegistro,
                            Codigo,
                            TipodePessoa,
                            Nome,
                            CPFouCNPJ,
                            NomeFantansia,
                            TipodoLocaldoIndicadordeInscricaoEstadual,
                            Inscricao,
                            InscricaoMunicipal,
                            InscricaoSuframa,
                            OrgaoExpeditor,
                            DatadaExpedicao,
                            DatadeNascimento,
                            CodigodaNacionalidade,
                            EstadoCivil,
                            Profissao,
                            CodigodoGrupo,
                            CodigodoPais,
                            Cep,
                            Endereco,
                            NumerodoEndereco,
                            ComplementodoEndereco,
                            Bairro,
                            Uf,
                            Cidade,
                            Email,
                            Telefone,
                            CodigodaCidade,
                            Ativo,
                            DatadoCadastro,
                            DatadeAtualizacao,
                            DatadeInativacao,
                            Pais,
                            InterfaceContaCorrentedoCliente: [
                                {
                                    SequenciadaConta,
                                    CodigodoCliente,
                                    CodigodaContaCorrente,
                                    CodigodoBanco,
                                    NomedoBanco,
                                    AgenciadoBanco,
                                    NomedaAgencia,
                                    EnderecodaAgencia,
                                    BairrodaAgencia,
                                    CidadedaAgencia,
                                    UFdaAgencia,
                                    CepdaAgencia,
                                    NumerodaContaBancaria,
                                    TipodeConta,
                                    Competencia,
                                    OperacaodeIntegracao
                                }
                            ],
                            InterfaceEnderecodoCliente: [
                                {
                                    SequenciaClienteEndereco,
                                    CodigoEnderecoAlternativo,
                                    DescricaoEnderecoAlternativo,
                                    NomeCliente,
                                    EnderecoAlernativo,
                                    Numero,
                                    Complemento,
                                    BairroAlternativo,
                                    CidadeAlternativo,
                                    UFAlternativo,
                                    CEPAlternativo,
                                    TelefoneAlternativo,
                                    CNPJAlternativo,
                                    InscricaoEstadualAlternativo,
                                    CodigoRegiaoAlternativo,
                                    EmailAlternativo,
                                    InscricaoMunicipalAlternativo,
                                    InscricaoSUFRAMAAlternativo,
                                    CodigoCidadeIBGEAlternativo,
                                    CodigoPaisIBGEAlternativo,
                                    TipoLocalIndicadorInscricaoEstadualAlternativo,
                                    OperacaodeIntegracaoAlternativo
                                }
                            ],
                            InterfaceContabildoCliente: [
                                {
                                    CodigoCliente,
                                    CodigoEmpresa,
                                    CodigoFilial,
                                    CodigoMoeda,
                                    NumeroContaContabil,
                                    NumeroContaContabilAntecipacao,
                                    OperacaodeIntegracao,
                                    InterfaceGrupoRecebimentodoCliente: [
                                        {
                                            CodigoCliente,
                                            CodigoEmpresa,
                                            CodigoFilial,
                                            CodigoMoeda,
                                            CodigoGrupoRecebimento,
                                            CodigoImpostoIRRF,
                                            CodigoImpostoINSS,
                                            CodigoImpostoISS,
                                            CodigoImpostoPIS,
                                            CodigoImpostoCOFINS,
                                            CodigoImpostoContribuicaoSocial,
                                            IndicadorGrupoPrincipal,
                                            IdentificadorTipoServico,
                                            CodigoAtividadeEconomica
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