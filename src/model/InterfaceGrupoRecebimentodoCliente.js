class InterfaceGrupoRecebimentodoCliente {

    constructor(CodigoGrupoRecebimento, CodigoImpostoIRRF, CodigoImpostoINSS, CodigoImpostoISS, CodigoImpostoPIS, CodigoImpostoCOFINS,
        CodigoImpostoContribuicaoSocial, IndicadorGrupoPrincipal, IdentificadorTipoServico, CodigoAtividadeEconomica) {
        this.CodigoGrupoRecebimento = CodigoGrupoRecebimento
        this.CodigoImpostoIRRF = CodigoImpostoIRRF
        this.CodigoImpostoINSS = CodigoImpostoINSS
        this.CodigoImpostoISS = CodigoImpostoISS
        this.CodigoImpostoPIS = CodigoImpostoPIS
        this.CodigoImpostoCOFINS = CodigoImpostoCOFINS
        this.CodigoImpostoContribuicaoSocial = CodigoImpostoContribuicaoSocial
        this.IndicadorGrupoPrincipal = IndicadorGrupoPrincipal
        this.IdentificadorTipoServico = IdentificadorTipoServico
        this.CodigoAtividadeEconomica = CodigoAtividadeEconomica
    }
}

module.exports = InterfaceGrupoRecebimentodoCliente;