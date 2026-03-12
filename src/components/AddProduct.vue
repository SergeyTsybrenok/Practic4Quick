<template>
<v-container>

  <Popup :popup="popup"/>
  
  <v-form @submit.prevent>
  <v-row>
    <v-col cols="12" md="6">
      <h2 class="text-center">Information</h2>
      <v-text-field 
        name="name" 
        :counter="42" 
        label="Product name" 
        v-model="newProduct.name" 
        required
      ></v-text-field>
      
      <v-textarea 
        label="description" 
        name="description" 
        v-model="newProduct.description"
        :counter="300"
        required
      ></v-textarea>
      
      <v-text-field 
        name="price" 
        :counter="10" 
        v-model="newProduct.price" 
        label="Price" 
        required
      ></v-text-field>
      
      <v-text-field 
        name="url" 
        label="Url image" 
        v-model="newProduct.imageUrl" 
        required
      ></v-text-field>
    </v-col>
    
    <v-col cols="12" md="5">
      <h2 class="text-center">Preview</h2>
      <ProductCard :product="newProduct" />
    </v-col>
  </v-row>

  <v-row justify="center" class="mt-4">
    <v-col cols="auto">
      <v-btn @click="addProduct" type="submit" size="large" color="success">Add</v-btn>
    </v-col>
  </v-row>
  </v-form>
</v-container>


</template>
<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue';
import { computed, reactive, ref } from 'vue';
import type { Product } from '@/types/product';
import { useProductStore } from '@/stores/useProductStore';
import { usePopup } from '@/composables/usePopup';
import Popup from './Popup.vue';

const popup = usePopup();

const product = useProductStore();

const newProduct: Product = reactive({
  id: 1,
  name: "",
  description: "",
  price: 1000,
  imageUrl: ""
})

function resetFormM() {
  newProduct.name = "";
  newProduct.description = "";
  newProduct.price = 1000;
  newProduct.imageUrl = "";
}

const addProduct = () => {
  if (newProduct.name && newProduct.price && newProduct.description && newProduct.imageUrl) {
    popup.showMessage('Product add Succes', 'success')
    //Fix problem with ref to unlink
    const productToAdd: Product = {
      name: newProduct.name,  
      description: newProduct.description,
      price: newProduct.price,  
      imageUrl: newProduct.imageUrl  
    }

    product.addProduct(productToAdd);

    // resetFormM()
  } else {
    popup.showMessage('Fill in all required fields', 'error')
  }
}
</script>