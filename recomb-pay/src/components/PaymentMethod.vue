<template>
    <v-card-title>
        <h2>Forma de Pagamento</h2>
    </v-card-title>
    <v-radio-group v-model="selectedPayment">
        <v-radio label="Cartão de crédito" value="credit-card"></v-radio>
        <v-radio label="Boleto" value="boleto"></v-radio>
        <v-radio label="Pix" value="pix"></v-radio>
    </v-radio-group>

    <v-card v-if="selectedPayment === 'credit-card'" class="payment-form">
        <v-card-title>Pagamento com Cartão de Crédito</v-card-title>
        <v-card-text>
            <CreditCardForm></CreditCardForm>
        </v-card-text>
    </v-card>

    <v-card v-if="selectedPayment === 'boleto'" class="payment-form">
        <v-card-title>Pagamento com Boleto</v-card-title>
        <v-card-text>
            <BoletoForm></BoletoForm>
        </v-card-text>
    </v-card>

    <v-card v-if="selectedPayment === 'pix'" class="payment-form">
        <v-card-title>Pagamento com Pix</v-card-title>
    </v-card>
</template>

<script>
import CreditCardForm from './CreditCardForm.vue';
import BoletoForm from './BoletoForm.vue';

export default {
    components: {
        CreditCardForm,
        BoletoForm
    },
    data() {
        return {
            selectedPayment: ''
        };
    }
};
</script>

<style scoped>
    .payment-form {
        margin-top: 20px;
    }
</style>