<template>
  <v-card class="mx-auto" max-width="344" min-width="285">
    <v-img height="200px" :src="product.imageUrl" cover />

    <v-card-title primary-title>
      <div>
        <h3>{{ product.name }}</h3>
        <div>${{ product.price }}</div>
        <div>id {{ product.id }}</div>
      </div>
      <div>Count: {{ getCount(product.id as number) }}</div>
    </v-card-title>

    <v-card-actions>
      <v-btn @click="goToProductDetailed" color="primary">See more</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { useAppStore } from "@/stores/app";
import type { Product } from "@/types/product";
import { useRouter } from "vue-router";

const useUsers = useAppStore();

function getCount(productId: number): number {
  const cartProducts = useUsers.currentUser?.Card;
  if (cartProducts) {
    const countOfProduct = cartProducts[
      cartProducts.findIndex((product) => product.productId === productId)
    ]?.count as number;
    return countOfProduct;
  }
  return 0;
}

const props = defineProps<{
  product: Product;
}>();

const router = useRouter();
const goToProductDetailed = () => {
  router.push({
    name: "product-detail",
    params: { id: props.product.id },
  });
};
</script>
