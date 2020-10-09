module.exports = {
    
    retornaCampo: (status, CampoSelecionado) => {
        let statusConvertido = parseInt(status)

        switch (statusConvertido) {

            case 1:
                let administradora
                if (CampoSelecionado)
                    administradora = { "administradora.razaoSocial": CampoSelecionado }

                else
                    administradora = {}

                return administradora;
                break
            case 2:
                let operadora
                if (CampoSelecionado)
                    operadora = { "operadora.nome": CampoSelecionado }

                else
                    operadora = {}

                return operadora;
                break;
            case 3:

                let dataNascimento
                if (CampoSelecionado)
                    dataNascimento = { "titular.dataNascimento": CampoSelecionado }

                else
                    dataNascimento = {}

                return dataNascimento;
                break;
            case 4:
                let nomeTitular
                if (CampoSelecionado)
                    nomeTitular = { "titular.nome": CampoSelecionado }

                else
                    nomeTitular = {}

                return nomeTitular;
                break;

            case 5:
                let entidade
                if (CampoSelecionado)
                    entidade = { "entidade.sigla": CampoSelecionado }

                else
                    entidade = {}

                return entidade;
                break;

            default:
                return {}

                break;
        }
    }

}