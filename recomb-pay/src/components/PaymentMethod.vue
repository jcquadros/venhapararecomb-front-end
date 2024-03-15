<template>
  <v-container>
     <!-- Card para exibir as opções de pagamento -->
    <v-card>
      <v-card-title>Como você prefere pagar?</v-card-title>

      <v-card-text>
        <!-- Grupo de botões de rádio para selecionar o método de pagamento -->
        <v-radio-group v-model="selectedMethod" @change="selectMethod">
          <v-row v-for="method in methods" :key="method.value">
            <v-col cols="12">
              <!-- Card clicável para selecionar o método de pagamento -->
              <v-card @click="selectMethod(method)" class="d-flex align-center  pa-4">
                <!-- Ícone correspondente ao método de pagamento -->
                <v-icon size="48" class="mr-4" :class="{ 'selected': method.value === selectedMethod.value }">{{ getIcon(method.value) }}</v-icon>
                <!-- Nome do método de pagamento -->
                <span :class="{ 'selected': method.value === selectedMethod.value }">{{ method.name }}</span>
                <!-- Botão de rádio invisível associado ao método de pagamento -->
                <v-radio :value="method" :label="method.name" class="d-none"></v-radio>
              </v-card>
            </v-col>
          </v-row>
        </v-radio-group>
        <!-- Botão de continuar desabilitado até que um método de pagamento seja selecionado -->
        <v-btn :disabled="!btn" @click="sendSelectedMethod" color="primary">Continuar</v-btn>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    name: 'PaymentMethod',
    data() {
      return {
        selectedMethod: {},
        btn: false,
        methods: [
          {
            name: 'Cartãode crédito',
            value: 'credit-card',
          },
          {
            name: 'Boleto bancário',
            value: 'boleto-bancario',
          },
          {
            name: 'Pix',
            value: 'pix',
          },
        ],};
    },
    methods: {
      // Método para selecionar um método de pagamento
      selectMethod(method) {
        if (this.selectedMethod !== method) {
          this.selectedMethod = method;
          this.btn = true;
        }
      },
      // Método para obter o ícone correspondente a um método de pagamento
      getIcon(value) {
        switch (value) {
          case 'credit-card':
            return 'mdi-credit-card';
          case'boleto-bancario':
            return 'mdi-file-document-outline';
          case 'pix':
            return 'mdi-qrcode';
          default:
            return '';
        }
      },
      sendSelectedMethod() {
        this.$emit('method-selected', this.selectedMethod.value);
      },
    },
  };
</script>

<style scoped>
  /* Altera a cor do texto e do ícone quando um método de pagamento é selecionado */
  .selected {
    color: rgb(42, 62, 163) !important;
  }
</style>