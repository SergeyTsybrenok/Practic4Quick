<template>
  <v-container fluid class="pa-0">
    <v-img
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.carexpert.com.au%2Fresize%2F3000%2F-%2Fapp%2Fuploads%2F2023%2F04%2Fmini-hatch-1.jpg&f=1&nofb=1&ipt=09934e4f09314a625f11a7407eedded721623a973c6e012847715d28f92df172"
      height="500"
      cover
      class="align-center"
    >
      <v-row justify="center" class="ma-0">
        <v-col cols="12" md="8" class="text-center white--text">
          <v-sheet color="rgba(0,0,0,0.6)" class="pa-10 rounded-lg">
            <h1 class="text-h2 font-weight-bold mb-4">Buy your favorite car</h1>
            <p class="text-h6 mb-6">Just buy it, please</p>
            <v-btn
              :to="{ name: 'catalog' }"
              color="orange-darken-2"
              size="large"
              variant="elevated"
            >
              Go to catalog
            </v-btn>
          </v-sheet>
        </v-col>
      </v-row>
    </v-img>
  </v-container>

  <v-container class="my-12">
    <v-row align="center">
      <v-col cols="12" md="6">
        <v-img
          src="https://hips.hearstapps.com/hmg-prod/images/a5835f7b-d514-4f3c-b826-5fa617a855d4.jpg?crop=0.827xw:0.826xh;0.105xw,0.174xh&resize=980:*"
          rounded="lg"
          elevation="4"
        ></v-img>
      </v-col>

      <!-- TODO use id of product for generic sale-->
      <v-col cols="12" md="6">
        <v-chip color="red" text-color="white" class="mb-4">HOT OFFER</v-chip>
        <h2 class="text-h3 mb-4">AUDI 2026!</h2>
        <p class="text-body-1 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          magnam aliquam dolorem quisquam voluptas reprehenderit ipsum nam
          doloremque cum repellat aliquid, dicta voluptatibus harum aperiam
          vitae eligendi ab iure optio?
        </p>

        <div class="d-flex align-center mb-6">
          <span class="text-h4 font-weight-bold text-red mr-4">{{
            currencyFormatter.format(23999)
          }}</span>
          <span class="text-h5 text-decoration-line-through text-grey">{{
            currencyFormatter.format(39999)
          }}</span>
        </div>

        <v-btn
          to="/product/7"
          color="primary"
          size="x-large"
          prepend-icon="mdi-cart"
        >
          Buy now
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { currencyFormatter } from "@/tools/formatters";
</script>
