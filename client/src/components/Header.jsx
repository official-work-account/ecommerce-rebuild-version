import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/" style={{ color: "white" }}>
            MERN ECOMMERCE
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" style={{ color: "white" }}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/products" style={{ color: "white" }}>
                Products
              </Nav.Link>
              <Nav.Link as={Link} to="/register" style={{ color: "white" }}>
                Register
              </Nav.Link>
              <Nav.Link as={Link} to="/login" style={{ color: "white" }}>
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
