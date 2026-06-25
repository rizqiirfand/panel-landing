// repositories/product.repository.ts

import { Prisma } from "@/generated/prisma/client";
import { paginateResponse } from "@/lib/pagination";
import { prisma } from "@/lib/prisma";

export async function create(data: Prisma.ProductCreateInput) {
  return prisma.product.create({ data });
}
export async function getAll(param?: Prisma.ProductFindManyArgs & { page: number }) {
  const page = param?.page ?? 1;
  const limit = param?.take ?? 10;
  const offset = (page - 1) * limit;

  // Run queries simultaneously inside a single transaction wrapper
  const [data, totalItems] = await prisma.$transaction([
    prisma.product.findMany({
      skip: offset,
      take: limit,
    }),
    prisma.product.count(),
  ]);

  return paginateResponse(data, totalItems, page, limit);
}
