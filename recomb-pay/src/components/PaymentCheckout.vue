<template>
  <v-container fluid>
    <v-row justify="center" class="mt-12">
      <!-- seleção do método de pagamento e informações do pagamento -->
      <v-col cols="12" sm="6" md="4">

        <PaymentMethod @method-selected="onMethodSelected" v-if="!selectedMethod" />
        
        <!-- Componente PaymentInfo para inserir informações de pagamento -->
        <PaymentInfo  :method="selectedMethod" @validated="onFormValidated" v-if="selectedMethod && !formValidated" />
        
        <!-- Componente PaymentFeedback para exibir feedback após validação do formulário -->
        <PaymentFeedback
        :selected-method="selectedMethod" 
        :boleto-code="boletoCode" 
        :boleto-due-date="boletoDueDate" 
        :boleto-pdf-url="boletoPdfUrl"
        :pix-qr-code="pixQrCode" 
        :pix-expiration-time="pixExpirationTime"
        @payment-completed="paymentCompleted = true"
        v-if="formValidated && !paymentCompleted"
        />
        
        <!-- resumo do pagamento -->
        <PaymentSummary :method="selectedMethod" :products="products" v-if="paymentCompleted"/>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import PaymentMethod from './PaymentMethod.vue';
import PaymentInfo from './PaymentInfo.vue';
import PaymentSummary from './PaymentSummary.vue';
import PaymentFeedback from './PaymentFeedback.vue';

export default {
  name: 'PaymentCheckout',
  components: {
    PaymentMethod,
    PaymentInfo,
    PaymentSummary,
    PaymentFeedback,
  },
  data() {
    return {
      paymentCompleted: false,
      selectedMethod: null,
      formValidated: false, // Indica se o formulário de pagamento foi validado
      // Lista de produtos para exibição no resumo do pagamento
      products: [
        {
          id: 1,
          name: 'Tenis Nike AirMax',
          description: 'Conforto durante o treino, com um design moderno e elegante.',
          price: 749,
          image: require('@/assets/nike-air-max.png'),
        },
        {
          id: 2,
          name: 'Tenis Vans Old Skool',
          description: 'O clássico dos clássicos, com um design atemporal e confortável.',
          price: 499,
          image: require('@/assets/vans.png'),
        },
        {
          id: 3,
          name: 'Tenix Nike Air Force 1',
          description: 'O tênis que nunca sai de moda, com um design elegante e confortável.',
          price: 799,
          image: require('@/assets/nike-air-force.png'),
        },
        {
          id: 4,
          name: 'Tenis Jordan 1',
          description: 'O tênis que marcou uma geração, com um design moderno e confortável.',
          price: 899,
          image: require('@/assets/jordan.png'),
        }
      ],
      // Dados fictícios para exibição do boleto
      boletoCode: '12345678901234',
      boletoDueDate: new Date( Date.now() + 432000000).toLocaleDateString(),
      boletoPdfUrl: 'https://qualquercoisaesselinkdeboletoehfake.pdf',
      // Dados fictícios para exibição do QR Code do PIX
      pixQrCode: require('@/assets/pix-qrcode.svg'),
      pixExpirationTime: 300,
    };
  },
  methods: {
    // Método chamado quando um método de pagamento é selecionado
    onMethodSelected(method) {
      this.selectedMethod = method;
      console.log('Method selected:', method);
    },
    // Método chamado quando o formulário de pagamento é validado
    onFormValidated(valid, data) {
      this.formValidated = valid;
      console.log('Form validated:', valid, data);
    },
  },
};
</script>


