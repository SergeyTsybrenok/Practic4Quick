<template>
    <h2>Users</h2>
    <v-data-table :headers="headers" :items="useUsers.users" >

    <v-btn
        variant="text"
        icon
        @click="edit(item)"
        @mouseenter="register($event)"
      >
        <v-icon>mdi-pencil</v-icon>
      </v-btn>

      <v-btn variant="text" icon @click="remove(item.id)">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-data-table>

      <v-dialog v-model="dialog" :activator="activator" max-width="500">
    </v-dialog>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app';
import { ref } from 'vue';

const dialog = ref(false);
const activator = ref(null);

const useUsers = useAppStore();

const headers = [
    { title: "Name", value: "Name" },
    { title: "Phone", value: "Number" },
    { title: "Mail", value: "Email" },
    { title: "Password Hash", value: "PasswordHash" },
    { title: "Admin", value: "Admin" },
    { title: "Likes", value: "Likes" },
    { title: "Card", value: "Card" },
    // { title: "History", value: "" }, //TODO
];

</script>