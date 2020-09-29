const joi = require('joi')

const contratos = joi.array().items(joi.object({
    subcontrato: joi.object({
        id: joi.number().required()
    }),
    contrato:  joi.object({
        id: joi.number().required()
    }),
    operadora: joi.object({
        id: joi.number().required(),
        cnpj: joi.string().required(),
        nome: joi.string().required(),
        site: joi.string().required(),
        telefone: joi.string().required(),
    }),
    entidade: joi.object({
        id: joi.number().required(),
        sigla: joi.string().required(),
        nome: joi.string().required(),
    }),
    entidade: joi.object({
        id: joi.number().required(),
        sigla: joi.string().required(),
        nome: joi.string().required(),
    }),
    entidade: joi.object({
        id: joi.number().required(),
        sigla: joi.string().required(),
        nome: joi.string().required(),
    }),
    plano: joi.object({
        tipoContratacao: joi.object({
            id: joi.number().required(),
            descricao: joi.string().required(),
        }),
        acomodacao:  joi.object({
            id: joi.number().required(),
            descricao: joi.string().required(),
        }),
        fatorModerador:  joi.object({
            id: joi.number().required(),
            descricao: joi.string().required(),
        }),
        cobertura:  joi.object({
            id: joi.number().required(),
            descricao: joi.string().required(),
        }),
        abrangenciaGeografica: joi.object({
            id: joi.number().required(),
            descricao: joi.string().required(),
        }),
        areaAtuacao: joi.object({
            id: joi.number().required(),
            descricao: joi.string().required(),
        }),
        operadora: joi.object({
            id: joi.number().required(),
            cnpj: joi.string().required(),
            nome: joi.string().required(),
            site: joi.string().required(),
            telefone: joi.string().required(),
        }),
        id: joi.number().required(),
        nome: joi.string().required(),
        codigoANS: joi.string().required(),
        adicionais: joi.optional(joi.string()),
        formacaoDePreco: joi.optional(joi.string()), //joi.alternatives().conditional(joi.string(), {then: joi.number()}),
        quantidadeVidas: joi.number().required(),
        valorTotal: joi.optional(joi.number()),
        valorTotalTabela: joi.optional(joi.number()),
        recorrenciaPromocaoMeses: joi.optional(joi.string()),
        indPromocional: joi.optional(joi.string()),
        indPossuiOpcional: joi.boolean().required(),
    }),
    titular: joi.object({
        estadoCivil:  joi.object({
            id: joi.number().required(),
            descricao: joi.string().required(),
        }),
        orgaoEmissor:  joi.object({
            id: joi.number().required(),
            descricao: joi.string().required(),
        }),
        endereco: joi.object({
            id: joi.number().required(),
            cep: joi.string().required(),
            logradouro: joi.string().required(),
            numero: joi.string().required(),
            complemento: joi.optional(joi.string().required()),
            bairro: joi.string().required(),
            cidade: joi.string().required(),
            uf: joi.string().required(),
        }),
        profissao: joi.object({
            id: joi.number().required(),
            descricao: joi.string().required(),
        }),
        dependente: joi.array().items(
            joi.object({
                id: joi.number().required(),
                cpf: joi.string().required(),
                nome: joi.string().required(),
                dataNascimento: joi.string().required(),
                nomeMae: joi.string().required(),
                sexo: joi.string().required(),
                cns: joi.optional(joi.string().required()),
                dnv: joi.optional(joi.string().required()),
                valorPlano: joi.number().required(),
                idade: joi.number().required(),
                numeroCarteirinha: joi.optional(joi.number()),
                estadoCivil: joi.object({
                    id: joi.number().required(),
                    descricao: joi.string().required(),
                }),
                grauParentesco: joi.object({
                    id: joi.number().required(),
                    descricao: joi.string().required(),
                }),
                carencia: joi.optional(joi.number())
            })

        ),
        id: joi.number().required(),
        cpf: joi.string().required(),
        rg: joi.string().required(),
        nome: joi.string().required(),
        dataNascimento: joi.string().required(),
        nomeMae: joi.string().required(),
        sexo: joi.string().required(),
        cns: joi.optional(joi.string()),
        dnv: joi.optional(joi.string()),
        email: joi.string().required(),
        dddTelefone: joi.optional(joi.string()),
        numTelefone: joi.optional(joi.string()),
        dddCelular: joi.string().required(),
        numCelular: joi.string().required(),
        valor: joi.number().required(),
        idade: joi.number().required(),
        numeroCarteirinha: joi.optional(joi.string()),
        representanteLegal: joi.optional(joi.string()),
        carencia: joi.optional(joi.string())
    }),
    corretora: joi.object({
        id: joi.number().required(),
        cnpj: joi.string().required(),
        nome: joi.string().required(),
        razaoSocial: joi.optional(joi.string()),
        possuiSupervisor: true,
        codigo: joi.string().required(),
        email: joi.string().required(),
        indAtivo: joi.optional(joi.string()),
        indLiberacaoColaborador: joi.optional(joi.string())
    }),
    administradora: joi.object({
        id: joi.number().required(),
        codigoANS: joi.string().required(),
        site: joi.string().required(),
        telefone: joi.string().required(),
        cnpj: joi.string().required(),
        nomeFantasia: joi.string().required(),
        razaoSocial: joi.string().required(),
    }),
    corretor: joi.object({
        id: joi.number().required(),
        cpf: joi.string().required(),
        nome: joi.string().required(),
        email: joi.string().required(),
        celular: joi.string().required(),
    }),
    supervisor: joi.object({
        corretor: joi.object({
            id: joi.number().required(),
            cpf: joi.string().required(),
            nome: joi.string().required(),
            email: joi.string().required(),
            celular: joi.optional(joi.string())
        }),
        id: joi.number().required(),
        corretora: joi.optional(joi.string())
    }),
    _id: joi.string().required(),
    dataVigencia: joi.string().required(),
    dataVencimento: joi.string().required(),
    valorTotal: joi.number().required(),
    valorTaxaAssociativa: joi.number().required(),
    taxaCadastro: joi.number().required(),
    valorTotalMensal: joi.number().required(),
    numeroProposta: joi.string().required(),
    qtdRecorrenciaAnualTaxaAssociativa: joi.optional(joi.number()),
    descricaoRecorrenciaTaxaAssociativa: joi.string().required(),
    id: joi.number().required()
}))

module.exports = {
    contratos
}