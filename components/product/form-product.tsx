"use client";

import { FieldError, Form, Input, Label, NumberField, TextArea, TextField } from "@heroui/react";
import ImageInput from "../ui/image-input";
import useNavigate from "@/hooks/use-navigate";
import useFormStateHandler from "@/hooks/use-form-state-handler";
import { createProduct } from "@/actions/product/create";
import LoadingButton from "../ui/loading-button";

const FormProduct = (props: { flexLayout: "row" | "column" }) => {
  const { navigateBack } = useNavigate();
  const { formIsLoading, submitForm } = useFormStateHandler();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitForm({
      dataForm: e.currentTarget,
      api: createProduct,
      onSucces: () => {
        navigateBack();
      },
    });
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
        <LoadingButton isLoading={formIsLoading} type="submit">
          Submit
        </LoadingButton>
      </div>
    </Form>
  );
};

export default FormProduct;
