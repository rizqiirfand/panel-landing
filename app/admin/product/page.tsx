import { getAllProduct } from "@/actions/product/get";
import { TableProduct } from "@/components/product/table-product";
import { Button } from "@heroui/react";
import Link from "next/link";

export default async function Product() {
  const data = await getAllProduct();
  return (
    <div>
      <Button>
        <Link href={"product/create"}>Create</Link>
      </Button>
      <TableProduct data={data}></TableProduct>
    </div>
  );
}
