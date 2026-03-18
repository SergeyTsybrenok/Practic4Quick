<template>
  <v-app>
    <v-main>
        <v-app-bar title="CarStation">
          <v-btn :to="{ name: 'home'}" text="Home"></v-btn>
          <v-btn :to="{ name: 'about'}" text="About"></v-btn>
          <v-btn :to="{ name: 'catalog'}" text="Catalog"></v-btn>
          <v-btn v-if="!useUsers.checkCurrentUser()" :to="{ name: 'account'}" text="Account"></v-btn>
          <v-btn v-else :to="{ name: 'account'}">Account ({{ useUsers.currentUser?.Login }})</v-btn>
          <v-btn :to="{ name: 'adminka'}" text="Adminka"></v-btn>
        </v-app-bar>
        <Popup :popup="popup"/>
      <router-view />
    </v-main>
    <Footer/>
  </v-app>
</template>

<script lang="ts" setup>
import Footer from './components/Footer.vue';
import { usePopup } from './composables/usePopup';
import { useAppStore } from './stores/app';

const useUsers = useAppStore();
const popup = usePopup();
</script>
