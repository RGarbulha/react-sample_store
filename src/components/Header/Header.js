import Cart from "../Cart/Cart";

import {Navbar, Nav, Container} from "react-bootstrap"

const Header = () => {
  return (
    <Navbar expand="lg" variant="light" bg="light">
    <Container>
      <Navbar.Brand href="#">Sample Store</Navbar.Brand>
      <Nav className="mr-auto">
      <Nav.Link href="#checkout">Checkout</Nav.Link>
    </Nav>
      <Cart/>
    </Container>
  </Navbar>
  );
};

export default Header;
