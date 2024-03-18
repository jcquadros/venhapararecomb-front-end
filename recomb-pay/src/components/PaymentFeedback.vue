<template>
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
        Tempo restante: {{ formatTime(localPixExpirationTime) }}
      </p>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn @click="$emit('payment-completed')">Fechar</v-btn>
    </v-card-actions>
  </v-card>
</template>
  
  <script>
  export default {
    name: 'PaymentFeedback',
    data() {
      return {
        localPixExpirationTime: this.pixExpirationTime
      };
    },
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
    },
    methods: {
      formatTime(time) {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
    },
    mounted() {
      // Iniciar o contador regressivo ao montar o componente
      if (this.selectedMethod === 'pix' && this.localPixExpirationTime > 0) {
        setInterval(() => {
          // Decrementar o tempo restante a cada segundo
          if (this.localPixExpirationTime > 0) {
            this.localPixExpirationTime--;
            console.log(this.localPixExpirationTime);
          }
        }, 1000);
      }
    }

  }
  </script>