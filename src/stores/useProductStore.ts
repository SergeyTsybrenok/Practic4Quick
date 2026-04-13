import { ref } from "vue";
import type { Product } from "@/types/product";
import { defineStore } from "pinia";

export const useProductStore = defineStore("product", () => {
  //PINIA
  const products = ref<Product[]>([]);
  const maxId = ref(0);

  function loadStoreData(data: any) {
    if (data.products) products.value = data.products;
    if (data.maxId) maxId.value = data.maxId;
  }

  function addProduct(newProduct: Product) {
    newProduct.id = maxId.value;
    products.value.push(newProduct);
    maxId.value = maxId.value + 1;

    console.log(maxId.value);
    console.log(products.value);
  }

  function getIndexFromProduct(productToFindIndex: Product): number {
    const index: number = products.value.findIndex((product) => {
      return product.id === productToFindIndex.id;
    });
    return index;
  }

  function replaceProduct(updateProduct: Product) {
    const index = products.value.findIndex(p => p.id === updateProduct.id);

    products.value.splice(index, 1, updateProduct);
  }

  function removeProductByIndex(index: number) {
    if (index >= 0 && index < products.value.length) {
      products.value.splice(index, 1);
    }
  }

  function getProductByIndex(index: number): Product | undefined {
    return products.value[index];
  }

  function deleteData() {
    products.value.splice(0);
    maxId.value = 0;
  }

  return {
    products,
    maxId,
    loadStoreData,
    addProduct,
    removeProductByIndex,
    getProductByIndex,
    deleteData,
    replaceProduct,
  };
});
