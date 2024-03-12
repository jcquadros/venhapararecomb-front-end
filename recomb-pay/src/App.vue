<template>
  <v-app>
    <v-main>
      <TheNavbar/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import TheNavbar from './components/TheNavbar.vue';
export default {
  name: 'App',
  components: {
    TheNavbar,
  },

  data: () => ({
    //
  }),
}
</script>
