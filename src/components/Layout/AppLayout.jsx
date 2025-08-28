import { Outlet, Link, useLocation } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function AppLayout(){
  const loc = useLocation();
  return (
    <>
      <Navbar bg="light" expand="md" className="mb-3">
        <Container>
          <Navbar.Brand as={Link} to="/">Financial Choices</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/scenario/1" active={loc.pathname.includes("/scenario/1")}>S1</Nav.Link>
            <Nav.Link as={Link} to="/scenario/2" active={loc.pathname.includes("/scenario/2")}>S2</Nav.Link>
            <Nav.Link as={Link} to="/scenario/3" active={loc.pathname.includes("/scenario/3")}>S3</Nav.Link>
            <Nav.Link as={Link} to="/scenario/4" active={loc.pathname.includes("/scenario/4")}>S4</Nav.Link>
            <Nav.Link as={Link} to="/summary" active={loc.pathname.includes("/summary")}>Summary</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className="pb-5"><Outlet/></Container>
    </>
  );
}
