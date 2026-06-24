"use client";
import FormProduct from "@/components/product/form-product";
import useNavigate from "@/hooks/use-navigate";

const ProductCreate = () => {
  const { renderComponentNavigate } = useNavigate();
  return (
    <div>
      {renderComponentNavigate({ type: "back-button" })}
      <div className="mt-3">
        <FormProduct flexLayout="row" />
      </div>
    </div>
  );
};

export default ProductCreate;
