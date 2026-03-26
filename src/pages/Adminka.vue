<template>
  <v-container>
    <h1>Adminka</h1>
    <v-btn :to="{ name: 'addProduct' }" text="Add product"></v-btn>
    <v-btn :to="{ name: 'editProducts' }" text="Edit product"></v-btn>
    <v-btn :to="{ name: 'users' }" text="Users"></v-btn>
    <v-btn :to="{ name: 'json' }" text="Json"></v-btn>
    <router-view />
  </v-container>
</template>