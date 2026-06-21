import FormProduct from "@/components/product/form-product";
import BackButton from "@/components/ui/back-button";

const ProductCreate = () => {
  return (
    <div>
      <BackButton></BackButton>
      <div className="mt-3">
        <FormProduct />
      </div>
    </div>
  );
};

export default ProductCreate;
