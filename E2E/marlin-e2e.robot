****Settings ***
Library           SeleniumLibrary
Suite Setup       Abrir a aplicacao
Suite Teardown    Fechar todos os Browsers

*** Variable ***
${USER}                            TESTEAPI.QUA
${SENHA}                           TST90
${QUADRO_LOGIN}                    id=div1
${USER_TELA}                       id=txfUsuario
${PASS_TELA}                       id=txfSenha
${BTN_CONECTAR}                    id=ext-gen19
${BTN_BONEQUIM}                    id=ext-gen20
${CADASTRO_COMUNS}                 xpath=//*[@id="SCOM"]/div
${BTN_GERAL_CADASTRO}              xpath=//*[@class=" x-btn-text mainMenuIconCadastro"]
${BTN_MENU_OPTIONS_CLIENTE}        xpath=//*[@id="mnmnu_1000_SCOM"]/ul/li[4]/a
${BTN_SUB_MENU_OPTIONS_CLIENTE}    xpath=//*[@class="x-menu-item x-unselectable"]          //*[contains(text(),'Clientes')]
${IFRAME_CADASTRO}                 xpath=//*[@id="10090_IFrame"]

${Pais}                                         xpath=//*[@id="hpcPais"]
${Button}                                       xpath=//*[@id="btnPesquisaCEP"] //button[contains(text(),'Buscar')]
${Cep}                                          id=hpfCEP
${Complemento}                                  id=txfComplemento
${Numero}                                       id=txfNumero
${E-mail}                                       id=txfEmail
${Fax}                                          id=txfFax
${Telefone}                                     id=txfTelefone
${Observação}                                   id=txfObservacao
${Natureza da retenção}                         id=hpcNaturezaRetencao
${Inscrição estadual ST}                        id=txfInscricaoEstadualRetencao
${NIT}                                          id=txfNumeroIdentificacaoTrabalhador
${Tipo assinante}                               id=hpfTipoAssinante
${Tipo de cliente do serviço de comunicação}    id=hpfTipoClienteServicoComunicacao
${Classificação do Simples Nacional DES-BH}     id=cmbTipoClassificacaoParticipanteSimplesNacional
${Data de alteração}                            id=txfDtAlterado
${Alterado por}                                 id=txfUsuarioAlteracao
${Cadastrado por}                               id=txfResCadastro
${OPTANTE_MEI}                                  xpath=//div[contains(text(),'Optante MEI')]
${NOME_RAZAO_SOCIAL}                            id=txfRazaoSocial


*** Keywords ***
Abrir a aplicacao
    Open Browser               https://prjqualivida.mxmwebmanager.com.br/Default.aspx?grupo=qualividaproj    chrome
    Maximize Browser Window
    Sleep                      1

Fechar todos os Browsers
    Close All Browsers

Login
    Wait Until Element Is Visible    ${QUADRO_LOGIN}
    Input Text                       ${USER_TELA}       ${USER}
    Input Text                       ${PASS_TELA}       ${SENHA}
    Click Element                    ${BTN_CONECTAR}

Cadastro
    Wait Until Element Is Visible    ${BTN_BONEQUIM}
    Click Element                    ${BTN_BONEQUIM}
    Sleep                            2
    Wait Until Element Is Visible    ${CADASTRO_COMUNS}
    Click Element                    ${CADASTRO_COMUNS}
    Sleep                            3
    Wait Until Element Is Visible    ${BTN_GERAL_CADASTRO} 
    Click Element                    ${BTN_GERAL_CADASTRO}
    Mouse Over                       ${BTN_MENU_OPTIONS_CLIENTE}
    Click Element                    ${BTN_SUB_MENU_OPTIONS_CLIENTE}
    Sleep                            3                                  

Cadastro de Cliente
    Wait Until Element Is Visible    ${IFRAME_CADASTRO}
    Select Frame                     ${IFRAME_CADASTRO} 
    Wait Until Element Is Visible    ${Pais}
    Click Element                    ${Classificação do Simples Nacional DES-BH}     
    Sleep                            3
    Click Element                    ${OPTANTE_MEI}
    Input Text                       ${Cep}                                          21221210
    Sleep                            2
    Click Element                    ${Button}                                       
    Sleep                            3
    Input Text                       ${NOME_RAZAO_SOCIAL}                            Automacao LTDA
    Input Text                       ${Pais}                                         Brasil
    Input Text                       ${E-mail}                                       bardoze@baresbrasil.com.br
    Input Text                       ${Fax}                                          2122557878
    Input Text                       ${Telefone}                                     219423111121
    Input Text                       ${Observação}                                   Simulacao de automação
    Input Text                       ${Natureza da retenção}                         99
    Input Text                       ${Inscrição estadual ST}                        81849561
    Sleep                            4
    Input Text                       ${NIT}                                          222222
    Input Text                       ${Tipo assinante}                               1
    Sleep                            2
    Input Text                       ${Tipo de cliente do serviço de comunicação}    1
    Sleep                            4
    Input Text                       ${Complemento}                                  casa 1
    Input Text                       ${Numero}                                       2
    Sleep                            4





*** Test Case ***
Logando no sistema
    Login

Acessando formulario de cadastro
    Cadastro

Preenchendo formulario
    Cadastro de Cliente