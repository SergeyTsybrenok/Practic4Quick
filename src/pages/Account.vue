<template>
    <v-container>
        <h2>Account {{ useUsers.currentUser?.Login }}</h2>
        
        <v-btn v-show="useUsers.checkCurrentUser" :to="{ name: 'login' }" text="sign in"></v-btn>
        <v-btn v-show="useUsers.checkCurrentUser" :to="{ name: 'registration' }" text="sign up"></v-btn>
        <!-- <v-btn :to="{ name: '???' }" text="Users"></v-btn> -->
        <router-view />
    </v-container>

</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app';

const useUsers = useAppStore();

</script>