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
} from "@heroui/react";
import ImageInput from "../ui/image-input";

const FormProduct = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};

    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    console.log(formData.get("image"));

    alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
  };

  return (
    <Form className="" onSubmit={onSubmit}>
      <div className="flex gap-4">
        <div className="w-1/2 flex flex-col gap-4">
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
        <div className="w-1/2 flex flex-col gap-4">
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

      <div className="flex gap-2 justify-end text-end w-full">
        <Button type="submit">Submit</Button>
      </div>
    </Form>
  );
};

export default FormProduct;
