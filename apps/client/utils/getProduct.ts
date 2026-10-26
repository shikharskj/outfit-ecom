import { getProducts, type Product } from "@/utils/getProducts";

// Mocks a "product by id" API call. Reuses the cached products mock; swap the
// body for a real fetch later.
export const getProductById = async (id: string): Promise<Product | null> => {
  const groups = await getProducts();
  for (const group of groups) {
    const product = group.products.find((entry) => entry.id === id);
    if (product) return product;
  }
  return null;
};

// Every product id, so each product page can be prerendered.
export const getAllProductIds = async (): Promise<string[]> => {
  const groups = await getProducts();
  return groups.flatMap((group) => group.products.map((product) => product.id));
};
