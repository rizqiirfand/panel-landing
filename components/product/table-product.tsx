"use client";
import { getAllProduct } from "@/actions/product/get";
import { ProductModel } from "@/generated/prisma/models";
import { Skeleton, Table } from "@heroui/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { TablePagination } from "../ui/table-pagination";
import { PaginationResponseMetaType } from "@/lib/pagination";
import useFetchGet from "@/hooks/use-fetch-get";

export const TableProduct = ({ limit = 10 }: { limit?: number }) => {
  const searchParams = useSearchParams();
  const { isFetching, fetchGet } = useFetchGet(getAllProduct);
  const [data, setData] = useState<ProductModel[]>([]);
  const [metaPagination, setMetaPagination] = useState<PaginationResponseMetaType>();

  const initPage = () => {
    const params = new URLSearchParams(searchParams);
    let tempPage = params.get("page") ? Number(params.get("page")) : null;
    fetchProduct({ page: tempPage ?? 1, limit });
  };

  const fetchProduct = async ({ page, limit }: { page: number; limit: number }) => {
    const res = await fetchGet({ page, limit });
    setData(res.data);
    setMetaPagination(res.meta);
  };

  useEffect(() => {
    initPage();
  }, []);

  return (
    <div>
      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Team members" className="min-w-[600px]">
            <Table.Header>
              <Table.Column isRowHeader>Kode</Table.Column>
              <Table.Column>Nama</Table.Column>
              <Table.Column>Harga</Table.Column>
              <Table.Column>Stock</Table.Column>
            </Table.Header>
            <Table.Body>
              {isFetching
                ? [...Array(limit)].map((_, i) => (
                    <Table.Row key={"key-table-product-row" + i}>
                      <Table.Cell>
                        <Skeleton className="h-3 rounded-lg" />
                      </Table.Cell>
                      <Table.Cell>
                        <Skeleton className="h-3 rounded-lg" />
                      </Table.Cell>
                      <Table.Cell>
                        <Skeleton className="h-3 rounded-lg" />
                      </Table.Cell>
                      <Table.Cell>
                        <Skeleton className="h-3 rounded-lg" />
                      </Table.Cell>
                    </Table.Row>
                  ))
                : data.map((d, i) => (
                    <Table.Row key={"key-table-product-row" + i}>
                      <Table.Cell>{d.code}</Table.Cell>
                      <Table.Cell>{d.name}</Table.Cell>
                      <Table.Cell>{d.price}</Table.Cell>
                      <Table.Cell>{d.stock}</Table.Cell>
                    </Table.Row>
                  ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
        <Table.Footer>
          {metaPagination && (
            <TablePagination
              onPageChange={(targetPage) => {
                fetchProduct({ page: targetPage, limit });
              }}
              page={metaPagination.page}
              itemsPerPage={metaPagination.perPage}
              totalItems={metaPagination.totalItems}
              totalPages={metaPagination.totalPages}
            />
          )}
        </Table.Footer>
      </Table>
    </div>
  );
};
