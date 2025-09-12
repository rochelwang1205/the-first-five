import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function HomePage() {
  // public 底下的資源請用 BASE_URL 做前綴
  const bg = `${import.meta.env.BASE_URL}background/desktop/home-1440.png`;

  return (
    <section
      className="d-flex flex-column justify-content-center align-items-center text-center"
      style={{
        minHeight: "100dvh",
        width: "100%",
        backgroundImage: `url(${bg})`,
        backgroundSize: "contain",
        backgroundPosition: "center top",
        backgroundRepeat: "repeat",
        overflow: "hidden",
      }}
    >
      <h1 className="mb-4">
        After 5 years,<br />I encountered<br />these things...
      </h1>
      <Button as={Link} to="/scenario/1" className="d-flex align-items-center">
        <span className="me-1">START</span>
        <span className="material-symbols-outlined">arrow_right_alt</span>
      </Button>
    </section>
  );
}
