import { ref } from "vue";
import type { Product } from "@/types/product";


export function useProduct() {
  const products = ref<Product[]>([]);

  function addProduct(product: Product) {
    products.value.push(product);
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
}