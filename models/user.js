const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    InterfacedoCliente: [
        {
            SequenciadoRegistro: Number,
            Codigo: Number,
            TipodePessoa: String,
            Nome: String,
            CPFouCNPJ: Number,
            NomeFantansia: String,
            TipodoLocaldoIndicadordeInscricaoEstadual: Number,
            Inscricao: Number,
            InscricaoMunicipal: Number,
            InscricaoSuframa: Number,
            OrgaoExpeditor: String,
            DatadaExpedicao: String,
            DatadeNascimento: String,
            CodigodaNacionalidade: String,
            EstadoCivil: String,
            Profissao: String,
            CodigodoGrupo: Number,
            CodigodoPais: String,
            Cep: Number,
            Endereco: String,
            NumerodoEndereco: Number,
            ComplementodoEndereco: String,
            Bairro: String,
            Uf: String,
            Cidade: String,
            Email: String,
            Telefone: Number,
            CodigodaCidade: Number,
            Ativo: String,
            DatadoCadastro: String,
            DatadeAtualizacao: String,
            DatadeInativacao: String,
            Pais: String,
            InterfaceContaCorrentedoCliente: [
                {
                    SequenciadaConta: Number,
                    CodigodoCliente: Number,
                    CodigodaContaCorrente: Number,
                    CodigodoBanco: Number,
                    NomedoBanco: String,
                    AgenciadoBanco: String,
                    NomedaAgencia: String,
                    EnderecodaAgencia: String,
                    BairrodaAgencia: String,
                    CidadedaAgencia: String,
                    UFdaAgencia: String,
                    CepdaAgencia: String,
                    NumerodaContaBancaria: String,
                    TipodeConta: String,
                    Competencia: String,
                    OperacaodeIntegracao: Number
                }
            ],
            InterfaceEnderecodoCliente: [
                {
                    SequenciaClienteEndereco: Number,
                    CodigoEnderecoAlternativo: String,
                    DescricaoEnderecoAlternativo: String,
                    NomeCliente: String,
                    EnderecoAlernativo: String,
                    Numero: String,
                    Complemento: String,
                    Bairro: String,
                    Cidade: String,
                    UF: String,
                    CEP: Number,
                    Telefone: Number,
                    CNPJ: Number,
                    InscricaoEstadual: Number,
                    CodigoRegiao: Number,
                    Email: String,
                    InscricaoMunicipal: Number,
                    InscricaoSUFRAMA: Number,
                    CodigoCidadeIBGE: Number,
                    CodigoPaisIBGE: String,
                    TipoLocalIndicadorInscricaoEstadual: Number,
                    OperacaodeIntegracao: Number
                }
            ],
            InterfaceContabildoCliente: [
                {
                    CodigoCliente: Number,
                    CodigoEmpresa: Number,
                    CodigoFilial: Number,
                    CodigoMoeda: String,
                    NumeroContaContabil: Number,
                    NumeroContaContabilAntecipacao: Number,
                    OperacaodeIntegracao: Number,
                    InterfaceGrupoRecebimentodoCliente: [
                        {
                            CodigoCliente: Number,
                            CodigoEmpresa: Number,
                            CodigoFilial: Number,
                            CodigoMoeda: String,
                            CodigoGrupoRecebimento: Number,
                            CodigoImpostoIRRF: Number,
                            CodigoImpostoINSS: String,
                            CodigoImpostoISS: String,
                            CodigoImpostoPIS: String,
                            CodigoImpostoCOFINS: String,
                            CodigoImpostoContribuicaoSocial: String,
                            IndicadorGrupoPrincipal: String,
                            IdentificadorTipoServico: Number,
                            CodigoAtividadeEconomica: Number
                        }
                    ]
                }
            ]
        }
    ]
})

module.exports = mongoose.model('User', UserSchema);
