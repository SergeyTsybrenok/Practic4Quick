<template>

<v-card class="mx-auto" max-width="344" min-width="285">
  <v-img
    height="200px"
    :src="product.imageUrl"
    cover
  />

  <v-card-title primary-title>
    <div>
      <h3>{{ product.name }}</h3>
      <div>${{ product.price }}</div>
      <div>id {{ product.id }}</div>
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