import * as ProductRepositories from "@/repositories/product.repositories";

export async function createProduct(data: FormData) {
  await ProductRepositories.create({
    name: data.get("name") as string,
    code: data.get("code") as string,
    price: Number(data.get("price")),
  });
}
