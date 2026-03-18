<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-btn
          @click="router.back()"
          prepend-icon="mdi-arrow-left"
          variant="text"
          class="mb-4"
        >
          Back
        </v-btn>
      </v-col>
    </v-row>

    <v-row v-if="product">
      <v-col cols="12" md="6">
        <v-img :src="product.imageUrl" height="auto" cover class="rounded" />
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
            <div class="text-h5 text-primary mb-4">${{ product.price }}</div>

            <v-divider class="my-4"></v-divider>

            <h3 class="text-h6 mb-2">Description:</h3>
            <p class="text-body-1">{{ product.description }}</p>
          </v-card-text>

          <v-card-actions>
            <v-btn
              v-if="
                useUsers.checkCurrentUser() &&
                !useUsers.haveProductInCard(product.id as number)
              "
              @click="useUsers.tryAddProductToCard(product.id as number)"
              color="primary"
              block
              size="large"
            >
              Add to cart
            </v-btn>
            <v-btn
              v-else-if="useUsers.checkCurrentUser() &&
                useUsers.haveProductInCard(product.id as number)
              "
              @click="pushToCard()"
              color="secondary"
              block
              size="large"
            >
              Remove from card
            </v-btn>
            <v-btn
              v-else
              @click="pushToLogin()"
              color="secondary"
              block
              size="large"
            >
              Log in to add to cart
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-row v-else>
      <v-col cols="12" class="text-center">
        <v-progress-circular
          indeterminate
          color="primary"
          size="64"
        ></v-progress-circular>
        <p class="mt-4">Loading product...</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useProductStore } from "@/stores/useProductStore";
import { useAppStore } from "@/stores/app";

const route = useRoute();
const router = useRouter();
const productStore = useProductStore();
const useUsers = useAppStore();

const product = computed(() => {
  const id = Number(route.params.id);
  return productStore.products.find((p) => p.id === id);
});

// TODO return user on product page after login or registration
function pushToLogin() {
  router.push({
    name: "login",
  });
}

function pushToCard() {
  router.push({
    name: "user-account",
    params: { login: useUsers.currentUser?.Login },
  });
}

//TODO 404
onMounted(() => {
  if (!product.value) {
    router.push("/catalog");
  }
});
</script>
