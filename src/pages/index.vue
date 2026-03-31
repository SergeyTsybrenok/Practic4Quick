<template>
  <v-container grid-list-md>
    <h1>Home page</h1>
  </v-container>
</template>

<script lang="ts" setup>

import router from "@/router";
router.push({ name: "catalog" });
</script>
