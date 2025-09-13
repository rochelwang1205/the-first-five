import { Button, Container, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ReminderPage() {
  const navigate = useNavigate();

  const handleUnderstand = () => {
    localStorage.setItem("seenReminder", "true"); 
    navigate("/"); 
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-5 rounded-4 shadow-lg w-50" style={{ maxWidth: "600px" }}>
        <h2>😊Friendly Reminder</h2>
        <p className="font-sans my-2">
          The scenarios and information in this game are designed to inspire you to think critically about personal finance and to provide foundational knowledge for the challenges ahead.
        </p>
        <p className="font-sans my-2">
          This content is for educational purposes only and does not constitute any form of financial or investment advice.</p>
        <p className="font-sans my-2">
          Real-world financial planning requires careful consideration of your personal circumstances. We hope this empowers you to build a strong financial future!
        </p>
        <Button variant="primary" onClick={() => navigate("/home")} className="mx-auto w-50 mt-3 rounded-4 px-4 py-2">
          I understand
        </Button>
      </Card>
    </Container>
  );
}

    