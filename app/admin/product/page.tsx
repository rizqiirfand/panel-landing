"use client";

import { TableProduct } from "@/components/product/table-product";
import useNavigate from "@/hooks/use-navigate";

export default function Product() {
  const { renderComponentNavigate } = useNavigate();
  return (
    <div>
      <div className="mb-4">
        {renderComponentNavigate({
          type: "button",
          target: "/admin/product/create",
          children: "Create",
        })}
      </div>
      <TableProduct></TableProduct>
    </div>
  );
}
