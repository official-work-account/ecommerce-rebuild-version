import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { toast } from "react-toastify";
import CheckOutSteps from "../components/CheckOutSteps";
import Loader from "../components/Loader";
import Message from "../components/Message";
// import { useCreateOrderMutation } from "../slices/ordersApiSlice";
// import { clearCartItems } from "../slices/cartSlice";

const PlaceOrderScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    if (Object.keys(cart.shippingAddress).length === 0) {
      navigate("/shipping");
    } else if (cart.paymentMethod.length === 0) {
      navigate("/payment");
    }
  }, [cart.paymentMethod, cart.shippingAddress, navigate]);

  return (
    <>
      <CheckOutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Address: </strong>
                {cart.shippingAddress.address}, {cart.shippingAddress.city},{" "}
                {cart.shippingAddress.postalCode},{" "}
                {cart.shippingAddress.country}
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Method</h2>
              <p>
                <strong>Payment Method: </strong>
                {cart.paymentMethod}
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Order Items</h2>
              {cart.cartItems.length === 0 ? (
                <Message>Your cart is empty</Message>
              ) : (
                <ListGroup variant="flush">
                  {cart.cartItems.map((item, index) => (
                    <ListGroup.Item key={index} className="">
                      <Row>
                        <Col xs={2} sm={2} md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col xs={6} sm={6} md={7} className="product-title">
                          <Link to={`/product/${item._id}`}>
                            {item.name.slice(0, 9)}...
                          </Link>
                        </Col>

                        <Col xs={4} sm={4} md={4}>
                          {item.qty} x {item.price} = {item.qty * item.price}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>Column</Col>
      </Row>
    </>
  );
};

export default PlaceOrderScreen;
