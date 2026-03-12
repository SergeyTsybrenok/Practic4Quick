<template>

<v-card class="mx-auto" max-width="344" min-width="285">
  <v-img
    height="200px"
    :src="product.imageUrl"
    cover
  />

  <v-card-title primary-title>
    <div>
      <v-text-field
        name="Name"
        label="Name"
        v-model="product.name"
      ></v-text-field>
      <v-text-field
        name="Description"
        label="Descrioption"
        v-model="product.description"
      ></v-text-field>
      <v-text-field
        name="price"
        label="Price"
        type="number"
        v-model="product.price"
      ></v-text-field>
      <v-text-field
        name="imageUrl"
        label="Image URL"
        type="text"
        v-model="product.imageUrl"
      ></v-text-field>
    </div>
  </v-card-title>

  <v-card-actions>
    <v-btn color="primary">See more</v-btn>
  </v-card-actions>

</v-card>
</template>

<script setup lang="ts">
import type { Product } from '@/types/product';

const props = defineProps<{
    product: Product;
}>();
</script>