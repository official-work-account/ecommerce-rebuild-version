import { useGetProductsQuery } from "../slices/productsApiSlice";

const ProductScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();
  console.log(products);

  return (
    <>
      <h1>ProductsScreen</h1>
    </>
  );
};

export default ProductScreen;
