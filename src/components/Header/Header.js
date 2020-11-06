import Cart from "../Cart/Cart";

import { Navbar, Nav, Container } from "react-bootstrap"
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <Navbar.Brand><Link to='/'>Sample Store</Link></Navbar.Brand>
        <Nav className="mr-auto">
          <Nav><Link to='/checkout'>Checkout</Link></Nav>
        </Nav>
        <Cart cart={props.cart} />
      </Container>
    </Navbar>
  );
};

export default Header;
