import { Prisma } from "@/generated/prisma/client";
import { Table } from "@heroui/react";

export const TableProduct = ({ data }: { data: Prisma.ProductModel[] }) => {
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
              {data.map((d, i) => (
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
      </Table>
    </div>
  );
};
