# Venha para Recomb

O desafio é desenvolver um frontend para um módulo de pagamentos no sistema:

*Considere que:*
- Usuário (já “logado”) escolheu X produtos e clicou em “Pagar”

*Você deve criar:*
Uma página de pagamento (checkout) com múltiplos passos 
que possibilite ao usuário:

1 - Escolher a opção de pagamento:
	
 	* Cartão de Crédito
 	* Boleto
 	* Pix

2 - Preencher as informações adicionais dependendo do método:
	
 	* Cartão de Crédito: Escolha da bandeira e preenchimento das informações (, código CVV, data de vencimento mm/aaaa e Nome do titular, CPF/CNPJ) e número de parcelas
 	
  	* Boleto: CPF, Nome, Sobrenome e e-mail
	
 	* Pix: Deve pular a segunda etapa

3 - Visualizar o instrumento de pagamento:
	
 	* Cartão de Crédito: Página aguardando aprovação do pagamento pela operadora
	
 	* Boleto: Deve exibir o código de barras do boleto, data de vencimento e botão para download do pdf do boleto
	
 	* Pix: Deve exibir o QRCode e um contador decrescente para expiração do mesmo

4 - Visualizar o resumo da compra:
	
 	* Produtos comprados (foto, nome e descrição)
	
 	* Método de pagamento escolhido
	
 	* Data da compra
	
 	* Previsão de entrega


# RecombPay

## Execução do Projeto
Para executar este projeto, siga os passos abaixo:

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Clone este repositório usando o comando:
""""
git clone https://github.com/jcquadros/venhapararecomb-front-end
"""
3. Navegue até o diretório do projeto:
"""
cd recomb-pay
"""
4. Instale as dependências do projeto:
"""
npm install
"""
5. Após a instalação, execute o projeto:
"""
npm run serve
"""
A seguir o projeto estará disponível em localhost http://localhost:8080/

Este projeto consiste em uma aplicação Vue.js que simula uma tela de pagamento fictícia, com duas opções de pagamento disponíveis: uma tela construída do zero e outra utilizando a API do Mercado Pago.

### Tela de Pagamento Construída do Zero
A tela de pagamento construída do zero possui os seguintes componentes:
- **SummaryProducts**: Componente que exibe a lista de produtos selecionados e o preço total.
- **PaymentMethod**: Componente que permite ao usuário escolher entre diferentes métodos de pagamento (cartão de crédito, boleto, pix) e preencher os dados necessários para cada opção.
- **CreditCardForm**: Componente específico para o pagamento com cartão de crédito, com campos de preenchimento para bandeira, titular, CPF/CNPJ, número do cartão, CVV, validade e parcelas.
- **BoletoForm**: Componente específico para o pagamento com boleto, com campos de preenchimento para CPF/CNPJ do pagador.

### Tela de Pagamento do Mercado Pago
A tela tem como função mostrar o uso de uma api e não foi implementado a finalização de pagamento. Apenas o formulário de pagamento.
- **Mercado Pago**: Integração com a API do Mercado Pago (Checkout Bricks) para exibir o formulário de pagamento do Mercado Pago. Toda a implementação desse código foi feita com referência na documentação disponível no site oficial.

## Lista de Diferenciais implentados
-**Vuetify**: O projeto foi quase todo implementado utilizando apenas essa biblioteca de estilização.
-**Mercado Pago API**: uma pequena demostração com a api do mercado pago. 
-**Vue**: Uso do vue para a criação do projeto.