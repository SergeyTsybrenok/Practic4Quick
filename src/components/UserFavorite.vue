<!-- TODO remove code duplicate (about ProductCard) -->
<template>
  <v-container>
    <h1>Favorite</h1>
    <v-row>
      <v-col v-for="product in userProducts" md="6" lg="5" xl="3">
        <ProductCard
          :product="product"
        ></ProductCard>
      </v-col>
    </v-row>

    <v-card class="mx-auto" v-if="!(useUsers.currentUser?.Likes?.length as number > 0)">
      <template v-slot:title>
        <span>Haven't products in Favorite</span>
      </template>

      <v-card-text>
        You must add some products to favorite to see them here.
      </v-card-text>

      <v-card-actions>
        <v-btn
          variant="outlined"
          color="green"
          :to="{ name: 'catalog' }"
          text="Go to Catalog"
        />
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { useAppStore } from "@/stores/app";
import { useProductStore } from "@/stores/useProductStore";
import type { Product } from "@/types/product";
import { computed, ref } from "vue";
import type { ProductLink } from "@/types/productLink";
import ProductCard from "./ProductCard.vue";
import { usePopup } from "@/composables/usePopup";

const { products, addProduct, removeProductByIndex } = useProductStore();
const useUsers = useAppStore();
const popup = usePopup();

const userProducts = computed(() => {
  return getUserFavoriteProducts();
});


function getProductLink(product: Product): ProductLink | undefined {
  const cartProducts = useUsers.currentUser?.Card;
  if (cartProducts) {
    const productLink: ProductLink = cartProducts[
      cartProducts.findIndex(
        (productInCart) => productInCart.productId === product.id,
      )
    ] as ProductLink;
    return productLink;
  }
  return undefined;
}

// TODO rewrite! O(n2)
// just use product in ProductLink instead of productId
function getUserFavoriteProducts() {
  let userProducts: Product[] = [];

  products.forEach((product) => {
    if (
      useUsers.currentUser?.Likes?.some(
        (ProductId) => ProductId === product.id,
      )
    ) {
      userProducts.push(product);
    }
  });
  return userProducts;
}
</script>
