<template>
    <v-card>
        <v-card-title>Resumo da compra</v-card-title>
        <v-card-subtitle>
            <!--- Total: -->
            <p>Total: R$ {{ getProductTotal() }}</p>
            <!-- Data da compra:  -->
            <p>Data da compra: {{ new Date().toLocaleDateString() }}</p>
            <!-- Previsao de entrega: -->
            <p>Previsão de entrega: {{ new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString() }}</p>
            <!-- Metodo de Pagamento -->
            <p>Método de pagamento: {{ getMethod() }}</p>
        </v-card-subtitle>
        <v-card-text>
            <!-- Lista de produtos -->
            <v-list>
                <v-list-item v-for="product in products" :key="product.id">
                    <v-row>
                        <v-col cols="auto">
                            <v-img :src="product.image" :alt="product.name" contain width="50" height="50"></v-img>
                        </v-col>
                        <v-col>
                            <v-list-item-title>{{ product.name }}</v-list-item-title>
                            <v-list-item-subtitle>{{ product.description }}</v-list-item-subtitle>
                            <v-list-item-subtitle>Preço: R$ {{ product.price }}</v-list-item-subtitle>
                        </v-col>
                    </v-row>
                </v-list-item>
            </v-list>
        </v-card-text> 
    </v-card>
</template>

<script>
export default {
    name: 'PaymentSummary',
    props: {
        products: {
            type: Array,
            required: true,
        },
        method: {
            type: String,
            required: true,
        },
    },
    methods: {
        getProductTotal() {
            return this.products.reduce((acc, product) => acc + product.price, 0);
        },
        getMethod(){
            switch (this.method) {
                case 'credit-card':
                    return 'Cartão de Crédito';
                case 'boleto-bancario':
                    return 'Boleto Bancário';
                case 'pix':
                    return 'Pix';
                default:
                    return 'Método de pagamento não identificado';
            }
        }

    },
};
</script>
