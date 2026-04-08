<template>
  <v-container align-center justify="center" fluid>
    <v-row align="center" justify="center">
      <v-card class="text-center pa-8" elevation="2" max-width="400">
        <v-icon size="64" color="grey" class="mb-4"
          >mdi-alert-circle-outline</v-icon
        >
        <v-card-title class="justify-center text-h2 font-weight-bold"
          >404</v-card-title
        >
        <v-card-text class="text-subtitle-1">
          Oops! We can't find the page you're looking for.
        </v-card-text>
        <v-card-actions class="justify-center mt-4">
          <v-btn
            prepend-icon="mdi-arrow-left"
            color="primary"
            to="/"
            variant="tonal"
          >
            Back to Home
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>
