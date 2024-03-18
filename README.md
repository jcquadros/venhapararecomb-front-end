# Venha para Recomb

Este projeto consiste em um frontend para um módulo de pagamentos. Foi desenvolvida apenas uma única página de checkout com múltiplos passos que possibilita ao usuário escolher uma opção de pagamento (Crédito, Boleto ou Pix), preencher as informações adicionais do método escolhido (Cpf, email, Nome, Sobrenome...), vizualizar o instrumento de pagamento (feedback) e por fim vizualizar um resumo da compra. Por fins de teste, todos os dados desse sistema são ficticios.

*A solução*
- Para cada passo do checkout foi criado um componente que desempenha a função designada. Sendo eles: 
	* PaymentMethod - possibilita o usuário escolher a opção de pagamento.
	* PaymentInfo - possibilita o usuário vizualizar o formulário correspondente ao método selecionado. Este médodo se relaciona com outros 3 componentes CardForm, BoletoForm e PixForm que são os formulários especificos de cada método.
	* PaymentFeedBack - mostra o resultado do pagamento. Se for cartão de crédito, exibe uma mensagem de aguardar aprovação. Se for boleto, exibe um código de barras qualquer uma data de vencimento e um link fake para baixar o pdf. Por fim, se for pix, exibe um QrCode.
	* PaymentSummary - exibe os produtos selecionados para a compra com foto, titulo, descrição, preço. Preço total da compra, método dde pagamento previsão de entrega e data de compra.

*A execução*
- Para executar a aplicação tenha o node e vuecli instalado no computador e execute:
```
npm install
```
```
npm run serve
```
Abra o navegador no link 'http://localhost:8080/'

*Diferenciais*
- Implementar usando Vue.
