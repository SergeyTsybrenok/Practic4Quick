<template>

<v-card class="mx-auto" max-width="344" min-width="285">

        <!-- <v-row>
                <v-card class="mx-auto" max-width="344" min-width="285">
                    <v-img height="200px" :src="product.imageLink" cover></v-img>
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">{{ product.name }}</h3>
                            <div>${{ product.price }}</div>
                            <div>id {{ product.id }}</div>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn flat color="primary">See more</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row> -->
  <v-img
    height="200px"
    :src="product.imageUrl"
    cover
  />

                <!-- <v-card class="mx-auto" max-width="344" min-width="285"> -->
  <v-card-title>
    <div>
      <h3>{{ product.name }}</h3>
      <div>${{ product.price }}</div>
      <div>id {{ product.id }}</div>
    </div>
  </v-card-title>

</v-card>
</template>

<script setup lang="ts">
import type { Product } from '@/types/product';

const props = defineProps<{
    product: Product;
    index: number
}>();


</script>