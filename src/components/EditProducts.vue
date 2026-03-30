<template>
  <h2>Edit products</h2>
  <v-row>
    <v-col v-for="product in products" :key="product.id" md="6" lg="5" xl="3">
      <EditProductCard :product="product" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import ProductCard from "@/components/ProductCard.vue";
import { useProductStore } from "@/stores/useProductStore";
import EditProductCard from "./EditProductCard.vue";

const { products, addProduct, removeProductByIndex } = useProductStore();
</script>
