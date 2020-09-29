*** Settings ***
Library           RabbitMq
Library           Collections
Suite Setup       Conectar ao RabbitMq
Suite Teardown    Fechar Conexoes do RabbitMq

*** Variable ***
@{lista_verificacao}    FilaTeste  NunesEGrossi.Hcommerce.Gatilho.PropostaAdesao.CadastrarSolicitacaoEnvioGatilho  NunesEGrossi.Hcommerce.Gatilho.PropostaAdesao.EnviarSolicitacao
    ...  NunesEGrossi.Hcommerce.PropostaAdesaoWebhook.Processar
    ...  Qualivida.HAdministradora.PosVenda.CadastroContratoBeneficiario
    ...  Roots.HAdministradora.PosVenda.CadastroContratoBeneficiario
    ...  Roots.Hcommerce.Gatilho.PropostaAdesao.CadastrarSolicitacaoEnvioGatilho
    ...  TestFila
    ...  fila1
    ...  test
    ...  testQueue

*** Keywords ***
Conectar ao RabbitMq
    Create Rabbitmq Connection                                                                                10.190.4.17      15672    5672    hadministradora    h4Dm1n44    alias=rmq    vhost=/

Fechar Conexoes do RabbitMq
    Close All Rabbitmq Connections

Teste RabbitMq online
    ${is_alive}                                                                                               Is Alive
    Log To Console                                                                                            ${is_alive}

Criar queue
    ${list}=	Create List	list_value	${FALSE}	15240
    ${args}=	Create Dictionary	arg1=value1	arg2=${list}
    Create Queue	queue_name=testQueue	auto_delete=true	durable=false	node=rabbit@primary	arguments=${args}

Propriedades da queue
    ${queue}=	Get Queue	testQueue
    Log Dictionary	${queue}		
    ${value}=	Get From Dictionary	${queue}	name
    Log	${value}	


Deletando Queue
    [Arguments]   ${queue}
    Delete Queue  ${queue}

Lista Queue
    ${queue}  Get Names Of Queues On Vhost  /
    Log To Console  ${queue}
    Log To Console  ${queue}
    Lists Should Be Equal  ${queue}  ${lista_verificacao}

Teste Queue
    ${queue}  Get Queue  Roots.HAdministradora.PosVenda.CadastroContratoBeneficiario  /
    Log To Console  ${queue}    
    

*** Test Case ***
Teste se RabbitMQ esta ativo
    Criar queue

Sobre a Queues
    Get Name Of All Connections

Listando as Queues
    Lista Queue   

Exibindo a Queue
     Teste Queue

Deletando Queue no RabbitMQ
    Deletando Queue   testQueue