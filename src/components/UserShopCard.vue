<template>
    <v-container>
        <h1>Cart</h1>
        <v-row>
            <v-col v-for="product in userProducts" md="6" lg="5" xl="3">
                <ProductCard
                    :product="product"
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue';
import { useAppStore } from '@/stores/app';
import { useProductStore } from '@/stores/useProductStore';
import type { Product } from '@/types/product';
import { computed, ref } from 'vue';

const { products, addProduct, removeProductByIndex } = useProductStore();
const useUsers = useAppStore();

const userProducts = computed(() => {
    return getUserCardProducts();
});

function getUserCardProducts() {
    let userProducts: Product[] = [];

    products.forEach(product => {
        if (useUsers.currentUser?.Card?.some((ProductLink) => ProductLink.productId === product.id)) {
            userProducts.push(product);
        }
    });
    return userProducts;
}

</script>