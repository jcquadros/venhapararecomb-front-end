<template>
    <!--Opções para exibir o formulário de pagamento -->
    <CreditCardForm v-if="method === 'credit-card'" @validated="onFormValidated" />
    <BoletoForm v-else-if="method === 'boleto-bancario'" @validated="onFormValidated" />
    <PixForm v-else-if="method === 'pix'" @validated="onFormValidated" />
</template>

<script>
import CreditCardForm from './CreditCardForm.vue';
import BoletoForm from './BoletoForm.vue';
import PixForm from './PixForm.vue';

export default {
    components: {
        CreditCardForm,
        BoletoForm,
        PixForm,
    },

    name: 'PaymentInfo',
    props: {
        method: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
    
        };
    },
    methods:{
        // Método chamado quando o formulário filho é validado
        onFormValidated(valid, data) {
            // emitir para o pai os dados do pagamento selecionado e os dados do formulário que sao recebidos do filho
            this.$emit('validated', valid, data);
        },
    }

};
</script>