import { ref } from "vue";
import type { Product } from "@/types/product";


export function useProduct() {
  const products = ref<Product[]>([]);

  function getMaxIdProduct(): number {
    const maxId = Math.max(...products.value.map(p => p.id as number), 0)
    return maxId;
  }

  function addProduct(product: Product) {
    if (typeof(product.id) === "undefined" ) {
      product.id = getMaxIdProduct() + 1;
      console.log(`product added with id: ${product.id}`);
    }
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