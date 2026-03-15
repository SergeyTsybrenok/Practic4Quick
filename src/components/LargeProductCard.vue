<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-btn @click="router.back()" prepend-icon="mdi-arrow-left" variant="text" class="mb-4">
          Back
        </v-btn>
      </v-col>
    </v-row>

    <v-row v-if="product">
      <v-col cols="12" md="6">
        <v-img
          :src="product.imageUrl"
          height="400"
          cover
          class="rounded"
        />
      </v-col>

      <v-col cols="12" md="6">
        <v-card>
          <v-card-title class="text-h4">
            {{ product.name }}
          </v-card-title>
          
          <v-card-subtitle class="text-h6">
            ID: {{ product.id }}
          </v-card-subtitle>

          <v-card-text>
            <div class="text-h5 text-primary mb-4">
              ${{ product.price }}
            </div>
            
            <v-divider class="my-4"></v-divider>
            
            <h3 class="text-h6 mb-2">Description:</h3>
            <p class="text-body-1">{{ product.description }}</p>
          </v-card-text>

          <v-card-actions>
            <v-btn color="primary" block size="large">
              Add to card
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-row v-else>
      <v-col cols="12" class="text-center">
        <v-progress-circular indeterminate color="primary" size="64"></v-progress-circular>
        <p class="mt-4">Loading product...</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useProductStore } from '@/stores/useProductStore';

const route = useRoute();
const router = useRouter();
const productStore = useProductStore();

const product = computed(() => {
  const id = Number(route.params.id);
  return productStore.products.find(p => p.id === id);
});

//TODO 404
onMounted(() => {
  if (!product.value) {
    router.push('/catalog');
  }
});
</script>