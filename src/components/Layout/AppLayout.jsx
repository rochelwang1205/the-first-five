import { Outlet, Link, useMatches } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

export default function AppLayout() {
  // 讀取目前最深層路由的 handle
  const matches = useMatches();
  const fullBleed = !!matches.at(-1)?.handle?.fullBleed;

  
  return (
    <div className={`layout d-flex flex-column min-vh-100 ${fullBleed ? "layout--fullbleed" : ""}`}>
      {/* Navbar：滿版頁浮在上層，內頁黏頂並佔位 */}
      <Navbar
        expand="md"
        className={`layout__nav ${fullBleed ? "bg-transparent position-absolute top-0 start-0 end-0 z-3" : "bg-body sticky-top shadow-sm"}`}
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src="/logo-typography.svg" alt="The First Five" />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>
            <Nav.Link as={Link} to="/faq">FAQs</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Main：一律 flex-grow-1；是否全寬由 fluid 切換 */}
      <main className="layout__main flex-grow-1">
        <Container fluid={fullBleed} className={fullBleed ? "p-0" : "py-4"}>
          <Outlet />
        </Container>
      </main>

      {/* Footer：固定高度變數，方便計算滿版頁高 */}
       <footer
        className={`bg-dark py-3 ${fullBleed ? "position-absolute bottom-0 start-0 end-0" : "mt-auto"}`}
      >
        <Container>
          <p className="text-center mb-0 text-white text-20 fw-thin">
            For educational and informational purposes only.<br/>
            This is not investment advice. You are solely responsible for your own financial decisions.
          </p>
        </Container>
      </footer>
    </div>
  );
}
