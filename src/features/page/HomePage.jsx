import Heading from "@layout/Heading.jsx";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function HomePage() {
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
      <Heading className="mb-4 text-48 text-md-96 fw-semibold">
        <div className="type-multi">
          <span className="type-line" style={{"--dur":"1400ms","--delay":"200ms","--steps":40}}>
            After <span className="text-primary">5</span> years,
          </span>
          <span className="type-line" style={{"--dur":"1200ms","--delay":"1700ms","--steps":28}}>
            I encountered
          </span>
          <span className="type-line" style={{"--dur":"1500ms","--delay":"3000ms","--steps":32}}>
            these things...
          </span>
        </div>
      </Heading>
      <Button as={Link} to="/scenario/1" className="btn-outlined d-flex align-items-center" data-aos="fade-in" data-aos-easing="linear" data-aos-delay="3000" data-aos-duration="3000">
        <span className="me-1">START</span>
        <span className="material-symbols-outlined">arrow_right_alt</span>
      </Button>
    </section>
  );
}
