import { Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ReminderPage() {
  const navigate = useNavigate();

  const handleUnderstand = () => {
    localStorage.setItem("seenReminder", "true"); 
    navigate("/"); 
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100" data-aos="zoom-in">
      <Card className="p-3 p-md-5 rounded-4 shadow-lg w-75" style={{ maxWidth: "800px" }}>
        <h2 className="text-20 text-md-24">😊Friendly Reminder</h2>
        <p className="font-sans my-2 d-none d-md-block text-12 text-sm-16">
          The scenarios and information in this game are designed to inspire you to think critically about personal finance and to provide foundational knowledge for the challenges ahead.
        </p>
        <p className="font-sans my-2 text-12 text-sm-16">
          This content is for educational purposes only and does not constitute any form of financial or investment advice.</p>
        <p className="font-sans my-2 d-none d-md-block text-12 text-sm-16">
          Real-world financial planning requires careful consideration of your personal circumstances. We hope this empowers you to build a strong financial future!
        </p>
        <Button variant="primary" onClick={() => navigate("/home")} className="btn-filled text-12 text-sm-20 border-radius-1 py-1 px-2 m-1 px-md-4 py-md-2 mt-md-3">
          I understand
        </Button>
      </Card>
    </Container>
  );
}

    