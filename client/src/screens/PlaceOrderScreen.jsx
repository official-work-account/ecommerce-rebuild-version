import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import CheckOutSteps from "../components/CheckOutSteps";

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

  return <div>PlaceOrderScreen</div>;
};

export default PlaceOrderScreen;
