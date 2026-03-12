<template>
    <v-container>
        <h1>Catalog</h1>
        <v-row>
            <v-col v-for="product in products" md="6" lg="5" xl="3">
                <ProductCard
                    :product="product"
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue';
import { useProductStore } from '@/stores/useProductStore';

const { products, addProduct, removeProductByIndex } = useProductStore();

addProduct({
    id:1,
    name:"hello",
    description:"hello",
    price:123,
    imageUrl:"https://i.pinimg.com/736x/a4/01/49/a401498abbaa75ae5ca121075f23e9f1.jpg",
})

</script>