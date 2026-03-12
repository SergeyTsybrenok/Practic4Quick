<template>
    <v-container grid-list-xs>
        <h2>Account</h2>
        
        <v-btn :to="{ name: 'login' }" text="sign in"></v-btn>
        <v-btn :to="{ name: 'registration' }" text="sign up"></v-btn>
        <!-- <v-btn :to="{ name: '???' }" text="Users"></v-btn> -->
        <router-view />
    </v-container>

</template>

<script setup lang="ts">

</script>