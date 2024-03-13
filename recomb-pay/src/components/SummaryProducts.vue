<template>
    <h3>Produtos</h3>
    <!-- lista de produtos -->
    <v-list>
        <v-list-item v-for="product in products" :key="product.id">
                <v-list-item-title>{{ product.name }}</v-list-item-title>
                <v-list-item-subtitle>{{ product.price }}</v-list-item-subtitle>
        </v-list-item>
    </v-list>
   
    <v-divider></v-divider>
    
    <p>Preço Total: {{ getTotalPrice() }}</p>

</template>

<script>
export default {
    name: 'SummaryProducts',
    data() {
        return {
            products: [
                {
                    id: 1,
                    name: 'Escova de dente',
                    price: 100,
                    quantity: 1
                },
                {
                    id: 2,
                    name: 'Celular',
                    price: 200,
                    quantity: 1
                },
                {
                    id: 3,
                    name: 'Televisão',
                    price: 300,
                    quantity: 1
                }
            ]
        }
    },
    methods : {
        getTotalPrice() {
            return this.products.reduce((acc, product) => {
                return acc + product.price
            }, 0)
        }
    }
}

</script>