// repositories/product.repository.ts

import { Prisma } from "@/generated/prisma/client";
import { prisma } from "@/lib/prisma";

export async function create(data: Prisma.ProductCreateInput) {
  return prisma.product.create({ data });
}
export async function getAll(param?: Prisma.ProductFindManyArgs) {
  return prisma.product.findMany({ take: 10, skip: 1, ...param });
}
