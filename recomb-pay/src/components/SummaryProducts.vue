<template>
    
    <v-card-title>
        <h3>Products</h3>
    </v-card-title>
    <v-card-text>
        <v-list>
            <v-list-item v-for="product in products" :key="product.id">
                    <v-list-item-title>{{ product.name }}</v-list-item-title>
                    <v-list-item-subtitle>{{ product.price }}</v-list-item-subtitle>
            </v-list-item>
        </v-list>
    </v-card-text>
        
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
}

</script>