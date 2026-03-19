<template>
    <v-container>
        <h2>Account {{ useUsers.currentUser?.Login }}</h2>
        
        <v-btn v-show="!useUsers.checkCurrentUser()" :to="{ name: 'login' }" text="Sign in"></v-btn>
        <v-btn v-show="!useUsers.checkCurrentUser()" :to="{ name: 'registration' }" text="Sign up"></v-btn>

        <v-btn v-show="useUsers.checkCurrentUser()" @click="pushToProfile()">Profile</v-btn>
        <v-btn v-show="useUsers.checkCurrentUser()" @click="pushToCart()">Cart</v-btn>
        <v-btn v-show="useUsers.checkCurrentUser()" @click="signOut()">Sign out</v-btn>
        <router-view />
    </v-container>

</template>

<script setup lang="ts">
import router from '@/router';
import { useAppStore } from '@/stores/app';
import { onMounted } from 'vue';

const useUsers = useAppStore();

function signOut() {
    useUsers.logout();
    router.push({
        name:"login"
    });
}

// TODO add check onMount

function pushToCart() {
    if (!useUsers.checkCurrentUser()) return;

    router.push({
        name: "user-cart",
        params: { login: useUsers.currentUser?.Login }
    })
}

//TODO remove dublication
function pushToProfile() {
    if (!useUsers.checkCurrentUser()) return;

    router.push({
        name: "user-account",
        params: { login: useUsers.currentUser?.Login }
    })
}
</script>