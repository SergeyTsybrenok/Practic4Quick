<template>
  <v-card class="mx-auto" width="320" link @click="goToProductDetailed()">
    <v-img height="300px" :src="product.imageUrl">
      <v-chip
        v-if="product.salePrice && (product.salePrice as number) > 0"
        class="ma-2 text-green"
        lable
        >Sale -{{
          Math.round(100 - (product.price / product.salePrice) * 100)
        }}%</v-chip
      >
      <template #error>
        <v-img
          :src="errorImageUrl"
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
      <h3 class="text-headline-small font-weight-bold my-2">
        {{ product.name }}
      </h3>
      <div class="d-flex align-center mb-4">
        <div
          v-if="product.salePrice && (product.salePrice as number) > 0"
          class="text-primary"
        >
          <span class="text-h4 text-primary mr-4">{{
            currencyFormatter.format(product.price)
          }}</span>
          <span
            class="text-h6 text-title-medium text-decoration-line-through text-grey"
            >{{ currencyFormatter.format(product.salePrice) }}</span
          >
        </div>
        <div v-else class="text-primary">
          {{ currencyFormatter.format(product.price) }}
        </div>
      </div>
      <div class="d-flex flex-wrap text-h6 my-2 ga-2 text-title-medium">
        <v-chip :color="product.color.toLocaleLowerCase()+'-darken-3'" prepend-icon="mdi-palette">{{ product.color }}</v-chip>
        <v-chip prepend-icon="mdi-keyboard">{{ product.switch }}</v-chip>
        <v-chip prepend-icon="mdi-overscan">{{ product.size }}%</v-chip>
        <v-chip prepend-icon="mdi-palette-swatch">{{ product.keycaps }}</v-chip>
        <v-chip prepend-icon="mdi-apple-keyboard-caps" v-if="product.hotswap">
          HotSwap
        </v-chip>
        <v-chip prepend-icon="mdi-arrange-send-to-back" v-if="product.split">
          Split
        </v-chip>
        <v-chip prepend-icon="mdi-cable-data" v-if="!product.wireless">
          Wired
        </v-chip>
        <v-chip prepend-icon="mdi-rss" v-else> Wireless </v-chip>
      </div>
    </v-card-title>

    <v-card-actions class="flex-column align-stretch">
      <ProductCartButton
        :product="product"
        :use-users="useUsers"
        :in-cart="inCart"
        :product-link="productLink"
      />
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { useAppStore } from "@/stores/app";
import { currencyFormatter } from "@/tools/formatters";
import type { Product } from "@/types/product";
import { useRouter } from "vue-router";
import type { ProductLink } from "@/types/productLink";
import { usePopup } from "@/composables/usePopup";
import { ref } from "vue";
import ProductCartButton from "./sub-components/ProductCartButton.vue";
import { darken } from "vuetify/lib/util/colorUtils.mjs";

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

const goToProductDetailed = () => {
  router.push({
    name: "product-detail",
    params: { id: props.product.id },
  });
};
</script>
