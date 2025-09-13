import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NotFound() {
  const notfoundBg = `${import.meta.env.BASE_URL}background/desktop/home-1440.png`;
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center text-center" style={{
        minHeight: "100dvh",
        width: "100%",
        backgroundImage: `url(${notfoundBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "repeat",
      }} >
      <h2 className="text-96">NOT FOUND</h2>
      <p className="text-48">Sorry, the page you are looking for does not exist.</p>
      <Button as={Link} to="/">Go to Home</Button>
    </Container>
  );
}