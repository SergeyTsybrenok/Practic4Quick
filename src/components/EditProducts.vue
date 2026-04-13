<template>
  <h2>Edit products</h2>
  <v-row>
    <v-col
      v-for="product in products"
      :key="product.id"
      col="12"
      md="6"
      lg="4"
      xl="3"
    >
      <ProductCard :product="product" :in-edit="true" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import ProductCard from "@/components/ProductCard.vue";
import router from "@/router";
import { useProductStore } from "@/stores/useProductStore";

const { products, addProduct, removeProductByIndex } = useProductStore();

function goToProductDetailed(id: number) {
  router.push({
    name: "editProduct",
    params: { id: id },
  });
}
</script>
