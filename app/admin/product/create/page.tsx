import FormProduct from "@/components/product/form-product";
import BackButton from "@/components/ui/back-button";

const ProductCreate = () => {
  return (
    <div>
      <BackButton></BackButton>
      <div>
        <FormProduct />
      </div>
    </div>
  );
};

export default ProductCreate;
