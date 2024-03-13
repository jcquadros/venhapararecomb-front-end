<template>
  <v-container fluid class="pa-0">
      <v-row>
          <!-- resumo dos produtos -->
          <v-col cols="4">
              <v-card class="pa-5" elevation="12" max-width="300" min-height="100vh">
                  <SummaryProducts/>
              </v-card>
          </v-col>
          <!-- método de pagamento -->
          <v-col cols="8">
              <v-card class="pa-5 mt-10 ml-5" elevation="12" max-width="70%" >
                  <PaymentMethod/>
              </v-card>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
import PaymentMethod from '../components/PaymentMethod.vue';
import SummaryProducts from '../components/SummaryProducts.vue';

export default {
  components : {
      PaymentMethod,
      SummaryProducts
  },
}
</script>
