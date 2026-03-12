import { ref } from "vue";
import type { Product } from "@/types/product";
import { defineStore } from "pinia";


export const useProductStore = defineStore('product', () => { //PINIA
  const products = ref<Product[]>([]);
  const maxId = ref(0);

  // function getMaxIdProduct(): number {
  //   const maxId = Math.max(...products.value.map(p => p.id as number), 0) //TODO write what is map here
  //   console.log(maxId);
    
  //   return maxId;
  // }

  function addProduct(newProduct: Product) {
    newProduct.id = maxId.value;
    products.value.push(newProduct);
    maxId.value = maxId.value +1;

    console.log(maxId.value);
    console.log(products.value);
  }

  function removeProductByIndex(index: number) {
    if (index >= 0 && index < products.value.length) {
      products.value.splice(index, 1);
    }
  }

  function getProductByIndex(index: number): Product | undefined {
    return products.value[index];
  }

  return {
    products,
    addProduct,
    removeProductByIndex,
    getProductByIndex
  };
});