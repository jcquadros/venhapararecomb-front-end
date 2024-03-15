<template>
  <v-app>
    <v-app-bar title="Recomb Pay">
      <v-btn text>Home</v-btn>
    </v-app-bar>
    <v-main class="d-flex  justify-center" style="min-height: 300px;">
      <PaymentCheckout/>
    </v-main>
  </v-app>
</template>

<script>
import PaymentCheckout from './components/PaymentCheckout.vue'

export default {
  name: 'App',

  components: {
    PaymentCheckout,
  },

  data: () => ({
    //
  }),
}
</script>

<style scoped>

.v-app-bar {
  background: linear-gradient(to right, #0070f3, #784ba0);
  color: white;
}
</style>
