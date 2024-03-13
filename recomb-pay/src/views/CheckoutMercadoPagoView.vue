<template>
    <v-card class="pa-4 ma-auto mt-10" max-width="400" outlined>
        <v-card-title>
            <h2>Mercado Pago</h2>
        </v-card-title>
        <v-card-text>
            <p>Teste de integração com o Mercado Pago. Processamento de pagamentos não funcionam.</p>
        </v-card-text>
        <!-- Mercado Pago tela de Checkout-->
        <MercadoPago></MercadoPago>
    </v-card>
</template>

<script>
import MercadoPago from '../components/MercadoPago.vue';
  
export default {
    components: {
        MercadoPago
    }
}
</script>