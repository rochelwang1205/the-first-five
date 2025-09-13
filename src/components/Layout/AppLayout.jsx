import { Outlet, Link, useMatches } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";


export default function AppLayout() {
  const matches = useMatches();
  const fullBleed = !!matches.at(-1)?.handle?.fullBleed;
  const logo = `${import.meta.env.BASE_URL}logo-typography.svg`;

  
  return (
    
    <div className={`layout d-flex flex-column min-vh-100 ${fullBleed ? "layout--fullbleed" : ""}`}>
      <Navbar
        expand="md"
        className={`layout__nav ${fullBleed ? "bg-transparent position-absolute top-0 start-0 end-0 z-3" : "bg-body sticky-top"}`}
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="The First Five" height={32} />
          </Navbar.Brand>
          <Nav className="ms-auto flex-row gap-3">
            <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>
            <Nav.Link as={Link} to="/faq">FAQs</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <main className="layout__main flex-grow-1">
        <Container fluid={fullBleed} className={fullBleed ? "p-0" : "py-4"}>
          <Outlet />
        </Container>
      </main>
       <footer
        className={`bg-dark py-4 font-sans fw-regular ${fullBleed ? "position-absolute bottom-0 start-0 end-0" : "mt-auto"}`}
      >
        <Container>
          <p className="text-center mb-0 text-white">
            For educational and informational purposes only.<br/>
            This is not investment advice. You are solely responsible for your own financial decisions.
          </p>
        </Container>
      </footer>
    </div>
  );
}
