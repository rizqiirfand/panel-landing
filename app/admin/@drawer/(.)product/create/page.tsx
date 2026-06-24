"use client";
import FormProduct from "@/components/product/form-product";
import { Drawer } from "@heroui/react";

const ModalCreateProduct = () => {
  return (
    <Drawer.Content placement={"right"}>
      <Drawer.Dialog className={"w-1/2"}>
        <Drawer.CloseTrigger />
        <Drawer.Header>
          <Drawer.Heading>Form Buat Produk</Drawer.Heading>
        </Drawer.Header>
        <Drawer.Body>
          <FormProduct flexLayout="column" />
        </Drawer.Body>
      </Drawer.Dialog>
    </Drawer.Content>
  );
};

export default ModalCreateProduct;
