import { Outlet, Link, useLocation } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function AppLayout(){
  const loc = useLocation();
  return (
    <>
      <Navbar bg="light" expand="md" className="mb-3">
        <Container>
          <Navbar.Brand as={Link} to="/">LOGO here!!!!!</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/faq" active={loc.pathname.includes("/faq")}>FAQ</Nav.Link>
            <Nav.Link as={Link} to="/about" active={loc.pathname.includes("/about")}>About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className="pb-5"><Outlet/></Container>
    </>
  );
}
