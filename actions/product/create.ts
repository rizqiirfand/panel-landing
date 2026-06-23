"use server";
import { uploadFile } from "@/lib/storage/index";
import { generateProductCode } from "@/lib/utils/generate-product-code";
import * as ProductRepositories from "@/repositories/product.repositories";

export async function createProduct(data: FormData) {
  try {
    let image = "";
    if (data.get("image") && data.get("image") instanceof File) {
      try {
        const inputImage = data.get("image") as File;
        const uploaded = await uploadFile({
          file: inputImage,
          directory: "products",
        });
        image = uploaded.path;
      } catch (error) {
        return {
          success: false,
          message: "gagal upload gambar",
        };
      }
    }

    const res = await ProductRepositories.create({
      name: data.get("name") as string,
      code: generateProductCode(),
      price: Number(data.get("price")),
      image,
    });
    return {
      success: true,
      message: "berhasil membuat product",
      data: res,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "gagal membuat product",
    };
  }
}
