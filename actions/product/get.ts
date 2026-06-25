"use server";
import * as ProductRepositories from "@/repositories/product.repositories";

export async function getAllProduct(props?: { page?: number; limit?: number }) {
  const page = props?.page ?? 1;
  const limit = props?.limit ?? 10;
  return await ProductRepositories.getAll({ page, take: limit });
}
