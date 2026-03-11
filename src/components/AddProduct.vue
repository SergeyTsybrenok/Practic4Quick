<template>
<v-container>
  <v-snackbar
  v-model="snackbar.show"
  :color="snackbar.color"
  timeout="3000"
  location="top"
>
  {{ snackbar.text }}
  
  <template v-slot:actions>
    <v-btn
      color="white"
      variant="text"
      @click="snackbar.show = false"
    >
    Close
    </v-btn>
  </template>
</v-snackbar>

  
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
      <ProductCard :product="newProduct" :index="1" />
    </v-col>
  </v-row>

  <!-- Кнопка теперь центрирована -->
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
import { reactive, ref } from 'vue';
import type { Product } from '@/types/product';
import { useProduct } from '@/composables/useProduct';

const product = useProduct();

// TODO use Product type (problem)
const newProduct = reactive({
  id: 1,
  name: "",
  description: "",
  price: 1000,
  imageUrl: ""
})

const snackbar = ref({
  show: false,
  text: '',
  color: 'success' as 'success' | 'error' | 'info' | 'warning'
})

const showMessage = (message: string, color: 'success' | 'error' | 'info' | 'warning' = 'success') => {
  snackbar.value = {
    show: true,
    text: message,
    color
  }
}

function resetFormM() {
  newProduct.name = "";
  newProduct.description = "";
  newProduct.price = 1000;
  newProduct.imageUrl = "";
}

const addProduct = () => {
  if (newProduct.name && newProduct.price && newProduct.description && newProduct.imageUrl) {
    showMessage('Product add Succes', 'success')
    resetFormM()
    product.addProduct(newProduct)
    console.log(product.getProductByIndex(0));
    
  } else {
    showMessage('Fill in all required fields', 'error')
  }
}
</script>