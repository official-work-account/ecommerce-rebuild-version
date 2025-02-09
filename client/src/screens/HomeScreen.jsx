import { Row, Col } from "react-bootstrap";
// import products from "../data/productData";
import { useGetProductsQuery } from "../slices/productsApiSlice";

const HomeScreen = () => {
  const { data, isLoading, error } = useGetProductsQuery();
  console.log(data);

  return (
    <>
      {/* {isLoading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <div>{error?.data?.message || error.message}</div>
      ) : (
        <>
          <h1>HomeScreen</h1>
          <Row>
            {products.map((product) => (
              <h1 key={product._id}>{product.productName}</h1>
            ))}
          </Row>
        </>
      )} */}
    </>
  );
};

export default HomeScreen;
