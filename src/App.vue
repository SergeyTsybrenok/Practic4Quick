<template>
  <v-app>
    <v-main>
        <v-app-bar title="CarStation">
          <v-btn :to="{ name: 'home'}" text="Home"></v-btn>
          <v-btn :to="{ name: 'about'}" text="About"></v-btn>
          <v-btn :to="{ name: 'catalog'}" text="Catalog"></v-btn>
          <v-btn :to="{ name: 'account'}" text="Account"></v-btn>
          <v-btn :to="{ name: 'adminka'}" text="Adminka"></v-btn>
        </v-app-bar>
      <router-view />
    </v-main>
    <footer/>
  </v-app>
</template>

<script lang="ts" setup>
import Footer from './components/Footer.vue';

  //
</script>
