<template>
    <v-container>
        <h2>Hello {{ useUsers.currentUser?.Name }}</h2>

        <p>{{ useUsers.currentUser?.Email }}</p>
        <p>{{ useUsers.currentUser?.Number }}</p>
        <p>{{ useUsers.currentUser?.Login }}</p>
    </v-container>
</template>

<script setup lang="ts">
import router from '@/router';
import { useAppStore } from '@/stores/app';


const useUsers = useAppStore()

// It's global lol (call every time when change destination even if it's not this module)
router.beforeEach((to, from) => {
    if (to.name === "user-account" && !useUsers.checkCurrentUser()) {
        return false
    }
})
</script>