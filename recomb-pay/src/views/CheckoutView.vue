<template>
    <v-container>
        <v-row>
            <v-col class="mb-5" cols="12">
                <h2 class="headline font-weight-bold mb-5">
                    Checkout
                </h2>
                <PaymentMethod/>
            </v-col>
        </v-row>
    </v-container>

</template>

<script>
import PaymentMethod from '../components/PaymentMethod.vue';

export default {
    components: {
        PaymentMethod
    }
};

</script>