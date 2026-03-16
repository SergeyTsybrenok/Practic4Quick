<template>
    <v-container>
        <h2>Account {{ useUsers.currentUser?.Login }}</h2>
        
        <v-btn v-show="!useUsers.checkCurrentUser()" :to="{ name: 'login' }" text="sign in"></v-btn>
        <v-btn v-show="!useUsers.checkCurrentUser()" :to="{ name: 'registration' }" text="sign up"></v-btn>

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

onMounted(() => {
    if (useUsers.checkCurrentUser()) {
        router.push({
            name: "user-account",
            params: { login: useUsers.currentUser?.Login },
        })
    }
    else {
        router.push({
            name: "login",
        })
    }
})

</script>