import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="p-3">
      <div className="mb-5">
        <h2 className="fw-semibold text-48 text-dark">About</h2>
        <p className="fw-thin text-20">THE FIRST FIVE (TF5) is an online financial learning simulator that provides university students with a variety of financial situations they might encounter over the next five years. Through scenario-based thinking and relevant resources, it helps the general public improve their financial literacy. The platform utilizes a simple, interactive web interface with visual prompts and guidance for self-reflection.</p>
      </div>
      <div>
        <h2 className="fw-semibold text-48 text-dark">Formal Disclaimer</h2>
        <p className="fw-thin text-20">This application, The First Five, is intended to provide users with foundational financial knowledge through simulated scenarios and to spark interest in personal financial planning. All content, including but not limited to scenarios, options, and explanations, is hypothetical and for educational purposes only. It should not be considered or used as a substitute for professional investment, legal, tax, or financial advice. Before making any actual financial decisions, users should conduct their own research and consider their individual financial situation, goals, and risk tolerance. If necessary, seek the guidance of a qualified professional financial advisor. You are fully and solely responsible for all financial decisions you make.
</p>
      </div>
      

    </div>
  );
}
