<template>
  <v-container>
    <!-- Card para exibir o feedback do pagamento -->
    <v-card>
      <v-card-title>Pagamento realizado com sucesso!</v-card-title>
      <v-card-text class="d-flex align-center justify-center">
        <!-- Condições para exibir diferentes mensagens dependendo do método de pagamento -->
        <p v-if="selectedMethod === 'credit-card'">
          Aguarde a aprovação do pagamento pela operadora.
        </p>
        <p v-else-if="selectedMethod === 'boleto-bancario'">
          Código de barras: {{ boletoCode }}<br>
          Data de vencimento: {{ boletoDueDate }}<br>
          <a :href="boletoPdfUrl" download>Baixar boleto (PDF)</a>
        </p>
        <p v-else-if="selectedMethod === 'pix'">
          QRCode:<br>
          <img :src="pixQrCode" alt="QRCode" width="200" height="200">
          <br>
          Tempo restante: {{ pixExpirationTime }}
        </p>
      </v-card-text>
    </v-card>
  </v-container>
  </template>
  
  <script>
  export default {
    name: 'PaymentFeedback',
    props: {
      selectedMethod: {
        type: String,
        required: true
      },
      boletoCode: {
        type: String,
        default: ''
      },
      boletoDueDate: {
        type: String,
        default: ''
      },
      boletoPdfUrl: {
        type: String,
        default: ''
      },
      pixQrCode: {
        type: String,
        default: ''
      },
      pixExpirationTime: {
        type: Number,
        default: 0
      },
    }
  }
  </script>