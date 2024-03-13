<template>
    <!--Div de escolha de tipo de pagamento-->
    <div v-if="!cardFormValidated && !boletoFormValidated && !pixValidated">
        <h2>Forma de Pagamento</h2>
        <v-radio-group v-model="selectedPaymentMethod">
            <v-radio label="Cartão de crédito" value="credit-card"></v-radio>
            <v-radio label="Boleto" value="boleto"></v-radio>
            <v-radio label="Pix" value="pix"></v-radio>
        </v-radio-group>

        <v-card v-if="selectedPaymentMethod === 'credit-card'" class="payment-form">
            <v-card-title>Pagamento com Cartão de Crédito</v-card-title>
            <v-card-text>
                <CreditCardForm @validated="validateCardForm"></CreditCardForm>
            </v-card-text>
        </v-card>

        <v-card v-if="selectedPaymentMethod === 'boleto'" class="payment-form">
            <v-card-title>Pagamento com Boleto </v-card-title>
            <v-card-text>
                <BoletoForm @validated="validateBoletoForm"></BoletoForm>
            </v-card-text>
        </v-card>

        <v-card v-if="selectedPaymentMethod === 'pix'" class="payment-form">
            <v-card-title>Pagamento com Pix</v-card-title>
            <v-card-text>
                <p>Para gerar o QR Code, clique no botão abaixo.</p>
            <v-btn color="primary" @click="pixValidated = true">Gerar QR Code</v-btn>
            </v-card-text>
        </v-card>
    </div>

    <!-- Se o cartão for validado é exibida -->
    <v-row v-if="cardFormValidated">
        <v-col cols="12" class="text-center">
            <p>Aguarde a aprovação do pagamento pela operadora.</p>
            <v-icon color="green">mdi-check-circle</v-icon>
        </v-col>
    </v-row>

    <!-- Se o boleto for validado é exibida -->
    <v-row>
        <v-col cols="12" class="text-center">
            <p>Boleto gerado com sucesso!</p>
        </v-col>
    </v-row>

    <!-- Se o pix for validado é exibida -->
    <v-row v-if="pixValidated" >
        <v-col cols="12" class="d-flex flex-column align-center">
            <h2>Chave pix: 12101756760  :D</h2>
            <VueQRCodeComponent text="12191756760"></VueQRCodeComponent>
        </v-col>
    </v-row>
</template>

<script>
import CreditCardForm from './CreditCardForm.vue';
import BoletoForm from './BoletoForm.vue';
import VueQRCodeComponent from 'vue-qrcode-component'

export default {
    components: {
        CreditCardForm,
        BoletoForm,
        VueQRCodeComponent,
    },
    data() {
        return {
            selectedPaymentMethod: null,
            cardFormValidated: false,
            boletoFormValidated: false,
            pixValidated: false,
            paymentData: {},
        };
    },
    methods: {
        validateCardForm(isValid, cardData) {
            this.cardFormValidated = isValid;
            if (isValid) {
                this.paymentData = cardData;
            }
        },
        validateBoletoForm(isValid, boletoData) {
            this.boletoFormValidated = isValid;
            if (isValid) {
                this.paymentData = boletoData;
            }
        },
    },
};

</script>

<style scoped>
    .payment-form {
        margin-top: 20px;
    }
</style>