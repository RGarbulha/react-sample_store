import Cart from "../Cart/Cart";

import {Navbar, Nav, Container} from "react-bootstrap"
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <Navbar expand="lg" variant="light" bg="light">
    <Container>
      <Navbar.Brand><Link to='/'>Sample Store</Link></Navbar.Brand>
      <Nav className="mr-auto">
      <Nav.Link><Link to='/checkout'>Checkout</Link></Nav.Link>
    </Nav>
      <Cart/>
    </Container>
  </Navbar>
  );
};

export default Header;
