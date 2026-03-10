<template>

    <v-container>
        <h1>Catalog</h1>
        <v-row>
            <!-- <v-col v-for="product in products" :key="product.id"
            md="6"
            lg="5"
            xl="3"> -->
            <v-col v-for="product in products" :key="product.id" md="6" lg="5" xl="3">
                <ProductCard
                    :product="product"
                    :index="1"
                />
            </v-col>
        </v-row>


    </v-container>

</template>

<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue';
import { useProduct } from '@/composables/useProduct';

const { products, addProduct, removeProductByIndex } = useProduct();

addProduct({
    id: 1,
    name: "Blue ocean",
    price: 1999,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR496eFUndeAwHgR94dvcOQr9al-nIusu9n6Q&s"
});
addProduct({
    id: 2,
    name: "Red flag",
    price: 2000,
    imageUrl: "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/05/30/118050.jpg"
});
addProduct({
    id: 2,
    name: "Red flag",
    price: 2000,
    imageUrl: "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/05/30/118050.jpg"
});
addProduct({
    id: 2,
    name: "Red flag",
    price: 2000,
    imageUrl: "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/05/30/118050.jpg"
});
addProduct({
    id: 2,
    name: "Red flag",
    price: 2000,
    imageUrl: "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/05/30/118050.jpg"
});

addProduct({
    id: 2,
    name: "Red flag",
    price: 2000,
    imageUrl: "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/05/30/118050.jpg"
});
</script>