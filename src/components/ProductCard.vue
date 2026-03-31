<template>
  <!-- name: "product-detail",
    params: { id: props.product.id }, -->
  <v-card
    class="mx-auto"
    max-width="344"
    min-width="285"
    link
    @click="goToProductDetailed()"
  >
    <v-img height="200px" :src="product.imageUrl" cover />

    <v-card-title primary-title>
      <div>
        <h3>{{ product.name }}</h3>
        <div>{{ currencyFormatter.format(product.price) }}</div>
      </div>
    </v-card-title>

    <v-card-actions>
      <div>
        <v-btn
          v-if="
            useUsers.checkCurrentUser() &&
            !useUsers.haveProductInCard(product.id as number)
          "
          @click.stop="useUsers.tryAddProductToCard(product.id as number)"
          color="primary"
          block
          size="large"
        >
          Add to cart
        </v-btn>
        <v-btn
          v-else-if="
            useUsers.checkCurrentUser() &&
            useUsers.haveProductInCard(product.id as number)
          "
          @click.stop="useUsers.tryRemoveProductFromCard(product.id as number)"
          color="secondary"
          block
          size="large"
        >
          Remove from card
        </v-btn>
        <v-btn
          v-else
          :to="{ name: 'login' }"
          color="secondary"
          block
          size="large"
        >
          Log in to add to cart
        </v-btn>
      </div>
      <Favorite :product="product" :use-users="useUsers"/>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { useAppStore } from "@/stores/app";
import { useProductStore } from "@/stores/useProductStore";
import { currencyFormatter } from "@/tools/formatters";
import type { Product } from "@/types/product";
import { useRouter } from "vue-router";
import Favorite from "./sub-components/Favorite.vue";

const props = defineProps<{
  product: Product;
}>();

const useUsers = useAppStore();

const router = useRouter();

const goToProductDetailed = () => {
  router.push({
    name: "product-detail",
    params: { id: props.product.id },
  });
};
</script>
