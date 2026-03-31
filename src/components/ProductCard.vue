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

    <v-card-actions class="flex-column align-stretch">
      <div class="d-flex align-center w-100 md-2">
        <div class="flex-grow-1 mr-2">
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
            @click.stop="
              useUsers.tryRemoveProductFromCard(product.id as number)
            "
            color="secondary"
            block
            size="large"
          >
            Remove from card
          </v-btn>
          <v-btn
            v-else
            @click.stop
            :to="{ name: 'login' }"
            color="secondary"
            block
            size="large"
          >
            Log in to add to cart
          </v-btn>
        </div>
        <Favorite :product="product" :use-users="useUsers" />
      </div>
      <div v-if="props.inCart" class="w-100 mt-1">
        <v-number-input
          density="compact"
          label="Count"
          :max="100"
          :min="1"
          v-model="productLink.count"
          control-variant="split"
          @click.stop
        ></v-number-input>
        <div v-if="productLink.count > 1">
          Summary cost:
          {{ currencyFormatter.format(productLink.count * product.price) }}
        </div>
        <div class="centered"></div>
      </div>
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
import type { ProductLink } from "@/types/productLink";
import { usePopup } from "@/composables/usePopup";

const router = useRouter();
const useUsers = useAppStore();
const popup = usePopup();

const props = withDefaults(
  defineProps<{
    product: Product;
    productLink: ProductLink;
    inCart?: boolean;
  }>(),
  {
    inCart: false,
  },
);

function removeProduct(product: Product) {
  useUsers.tryRemoveProductFromCard(product.id as number);

  popup.showMessage(`${product.name} was deleted from your cart`, "info");
}

const goToProductDetailed = () => {
  router.push({
    name: "product-detail",
    params: { id: props.product.id },
  });
};
</script>
