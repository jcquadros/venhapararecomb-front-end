<template>
    <div>
        <v-radio-group v-model="selectedPayment">
            <v-row>
                <v-col cols="3">
                    <v-radio label="Cartão de crédito" value="credit-card"></v-radio>
                </v-col>
                <v-col cols="3">
                    <v-radio label="Boleto" value="boleto"></v-radio>
                </v-col>
                <v-col cols="3">
                    <v-radio label="Pix" value="pix"></v-radio>
                </v-col>
            </v-row>
        </v-radio-group>

        <v-card v-if="selectedPayment === 'credit-card'" class="payment-form">
            <v-card-title>Pagamento com Cartão de Crédito</v-card-title>
            <v-card-text>
                <CreditCardForm></CreditCardForm>
            </v-card-text>
        </v-card>

        <v-card v-else-if="selectedPayment === 'boleto'" class="payment-form">
            <v-card-title>Pagamento com Boleto</v-card-title>
            <v-card-text>
                <BoletoForm></BoletoForm>
            </v-card-text>
        </v-card>

        <v-card v-else-if="selectedPayment === 'pix'" class="payment-form">
            <v-card-title>Pagamento com Pix</v-card-title>
        </v-card>
    </div>
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