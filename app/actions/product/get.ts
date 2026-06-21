import * as ProductRepositories from "@/repositories/product.repositories";

export async function getAllProduct() {
  return await ProductRepositories.getAll();
}
