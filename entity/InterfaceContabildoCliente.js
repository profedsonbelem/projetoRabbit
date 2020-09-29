class InterfaceContabilidadedoCliente {

    constructor(CodigoCliente, CodigoEmpresa, CodigoFilial, CodigoMoeda, NumeroContaContabil, NumeroContaContabilAntecipacao){
            this.CodigoCliente = CodigoCliente
            this.CodigoEmpresa = CodigoEmpresa
            this.CodigoFilial = CodigoFilial
            this.CodigoMoeda = CodigoMoeda
            this.NumeroContaContabil = NumeroContaContabil
            this.NumeroContaContabilAntecipacao = NumeroContaContabilAntecipacao

    }
}

module.exports = InterfaceContabilidadedoCliente;