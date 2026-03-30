<template>
  <v-card class="mx-auto" max-width="344" min-width="285">
    <v-img height="200px" :src="product.imageUrl" cover />

    <v-card-title primary-title>
      <div>
        <h3>{{ product.name }}</h3>
        <div color="bg-red">{{ currencyFormatter.format(product.price) }}</div>
        <div>id {{ product.id }}</div>
      </div>
      <div v-if="productLink.count > 1">
        Summary cost:
        {{ currencyFormatter.format(productLink.count * product.price) }}
      </div>
    </v-card-title>

    <v-card-actions size="100px">
      <v-btn @click="goToProductDetailed" color="primary">See more</v-btn>
    </v-card-actions>
    <v-number-input
      label="Count"
      :max="100"
      :min="1"
      v-model="productLink.count"
      control-variant="split"
    ></v-number-input>
    <div class="centered">
      <v-btn flat icon @click="removeProduct(product)">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
      <v-btn
        v-if="!useUsers.inFavorite(product.id as number)"
        flat
        icon
        @click="useUsers.tryAddToFavorite(product.id as number)"
      >
        <v-icon>mdi-heart-outline</v-icon>
      </v-btn>
      <v-btn
        v-else
        flat
        icon
        @click="useUsers.tryRemoveFromFavorite(product.id as number)"
      >
        <v-icon>mdi-heart-outline</v-icon>
      </v-btn>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { usePopup } from "@/composables/usePopup";
import { useAppStore } from "@/stores/app";
import { currencyFormatter } from "@/tools/formatters";
import type { Product } from "@/types/product";
import type { ProductLink } from "@/types/productLink";
import { useRouter } from "vue-router";

const useUsers = useAppStore();

const props = defineProps<{
  product: Product;
  productLink: ProductLink;
}>();

const popup = usePopup();

function removeProduct(product: Product) {
  useUsers.tryRemoveProductFromCard(product.id as number);

  popup.showMessage(`${product.name} was deleted from your cart`, "info");
}

const router = useRouter();
const goToProductDetailed = () => {
  router.push({
    name: "product-detail",
    params: { id: props.product.id },
  });
};
</script>
