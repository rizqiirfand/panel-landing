"use client";

import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  NumberField,
  TextArea,
  TextField,
  toast,
} from "@heroui/react";
import ImageInput from "../ui/image-input";
import { createProduct } from "@/actions/product/create";
import { FaUser } from "react-icons/fa";
import useNavigate from "@/hooks/use-navigate";

const FormProduct = (props: { flexLayout: "row" | "column" }) => {
  const { navigateBack } = useNavigate();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};

    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    try {
      const res = await createProduct(formData);
      if (res.success) {
        toast("Success", {
          actionProps: {
            children: "Dismiss",
            onPress: () => toast.clear(),
            variant: "tertiary",
          },
          description: res.message,
          variant: "success",
        });
        navigateBack();
      } else {
        toast("Error", {
          actionProps: {
            children: "Dismiss",
            onPress: () => toast.clear(),
            variant: "tertiary",
          },
          description: res.message,
          indicator: <FaUser />,
          variant: "danger",
        });
      }
    } catch (error) {
      toast("Error", {
        actionProps: {
          children: "Dismiss",
          onPress: () => toast.clear(),
          variant: "tertiary",
        },
        description: "res.message",
        indicator: <FaUser />,
        variant: "danger",
      });
    }
  };

  return (
    <Form className="" onSubmit={onSubmit}>
      <div className={`${props.flexLayout == "row" ? "grid grid-cols-2" : "flex flex-col"} gap-4`}>
        <div className={`flex flex-col gap-4`}>
          <div className="flex flex-col">
            <Label className="mb-2">Gambar Produk</Label>
            <ImageInput inputName={"image"} />
          </div>
          <TextField isRequired name="name" type="text">
            <Label>Nama Produk</Label>
            <Input />
            <FieldError />
          </TextField>
          <div className="flex flex-col">
            <Label htmlFor="textarea-description" className="mb-2">
              Keterangan Produk
            </Label>
            <TextArea id="textarea-description" rows={5} />
          </div>
        </div>
        <div className={`flex flex-col gap-4`}>
          <NumberField defaultValue={0} minValue={0} name="stock" step={1}>
            <Label>Stok Produk</Label>
            <NumberField.Group className="flex">
              <NumberField.Input className="flex-1" />
              <NumberField.DecrementButton />
              <NumberField.IncrementButton />
            </NumberField.Group>
          </NumberField>
          <NumberField
            defaultValue={0}
            minValue={0}
            name="price"
            step={1000}
            formatOptions={{
              currency: "IDR",
              currencySign: "accounting",
              style: "currency",
            }}
          >
            <Label>Harga Produk</Label>
            <NumberField.Group className="flex">
              <NumberField.Input className="flex-1" />
              <NumberField.DecrementButton />
              <NumberField.IncrementButton />
            </NumberField.Group>
          </NumberField>
        </div>
      </div>

      <div className="flex gap-2 justify-end text-end w-full mt-4">
        <Button type="submit">Submit</Button>
      </div>
    </Form>
  );
};

export default FormProduct;
