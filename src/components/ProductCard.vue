<template>
  <v-card class="mx-auto" width="320" link @click="goToProductDetailed()">
    <v-img height="200px" :src="product.imageUrl" cover>
      <template #error>
        <v-img
          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fallthatsinteresting.com%2Fwordpress%2Fwp-content%2Fuploads%2F2015%2F06%2Fworst-cars-vega.jpg&f=1&nofb=1&ipt=c9083ff540855f4bb8349d2151fa7c8bb641947a867841b366dee2428b329ac4"
          cover
          class="d-flex flex-row align-center justify-center text-center"
        >
          <v-sheet color="rgba(0,0,0,0.7)" class="pa-2 h-100">
            <v-icon size="50"> mdi-alert-box </v-icon>
            <p class="text-h2 font-weight-bold">Image Missing</p>
          </v-sheet>
        </v-img>
      </template>
    </v-img>

    <v-card-title primary-title>
      <div>
        <h3 class="text-headline-small font-weight-bold my-2">{{ product.name }}</h3>
        <div class="text-primary mb-1">
          {{ currencyFormatter.format(product.price) }}
        </div>
      </div>
    </v-card-title>

    <v-card-actions class="flex-column align-stretch">
      <div class="d-flex align-center w-100 md-2">
        <div class="flex-grow-1 mt-3">
          <v-btn
            v-if="
              useUsers.checkCurrentUser() &&
              !useUsers.haveProductInCard(product.id as number)
            "
            @click.stop="useUsers.tryAddProductToCard(product.id as number)"
            color="primary"
            prepend-icon="mdi-cart"
            block
            variant="tonal"
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
            prepend-icon="mdi-cart-off"
            color="red-lighten-3"
            variant="tonal"
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
            variant="outlined"
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
import { ref } from "vue";

const router = useRouter();
const useUsers = useAppStore();
const popup = usePopup();

const errorImageUrl = ref(
  "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fallthatsinteresting.com%2Fwordpress%2Fwp-content%2Fuploads%2F2015%2F06%2Fworst-cars-vega.jpg&f=1&nofb=1&ipt=c9083ff540855f4bb8349d2151fa7c8bb641947a867841b366dee2428b329ac4",
);

const props = withDefaults(
  defineProps<{
    product: Product;
    productLink?: ProductLink;
    inCart?: boolean;
  }>(),
  {
    inCart: false,
    productLink: () => ({ productId: 1, count: 1 }), //Fix Error
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
