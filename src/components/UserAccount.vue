<template>
    <v-container>
        <h2>Hello {{ useUsers.currentUser?.Name }}</h2>

        <p>{{ useUsers.currentUser?.Email }}</p>
        <p>{{ useUsers.currentUser?.Number }}</p>
        <p>{{ useUsers.currentUser?.Login }}</p>
    </v-container>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app';


const useUsers = useAppStore()
</script>