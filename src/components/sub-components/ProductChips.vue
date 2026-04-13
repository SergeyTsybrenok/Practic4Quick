<template>
  <div class="d-flex flex-wrap text-h6 my-2 ga-2 text-title-medium">
    <v-chip
      :color="product.color.toLocaleLowerCase() + '-darken-3'"
      prepend-icon="mdi-palette"
      >{{ product.color }}</v-chip
    >
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
</template>

<script setup lang="ts">
import type { Product } from "@/types/product";

const props = defineProps<{
  product: Product;
}>();
</script>
