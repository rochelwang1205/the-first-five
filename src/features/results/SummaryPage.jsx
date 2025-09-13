import { Card, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useGameStore } from "../../store/useGameStore";
import { scenarios } from "../../data/scenarios";

export default function SummaryPage(){
  const { choices } = useGameStore();
  const feedbackBg = `${import.meta.env.BASE_URL}background/desktop/home-1440.png`;
  const cardColors = [
  "var(--bs-primary)",
  "var(--bs-secondary)",
  "var(--bs-info)",
  "var(--bs-success)"
];


  return (
    <Container fluid="lg" className="px-3 px-md-4 px-lg-5 py-4 py-md-5">
      <header className="mb-4 mb-md-5">
        <p className="text-center mb-3 text-24 font-sans fw-semibold">
          🎉 Congratulations on Completing Your Journey!
        </p>
        <p className="font-sans" style={{ maxWidth: 960, margin: "0 auto" }}>
          You've successfully navigated some of the biggest financial decisions you may face in the first five years after college.
          The goal of this simulation wasn't to find the single "right" answer, but to explore the trade-offs and long-term effects of each choice.
          Every decision, big or small, is a step on your financial path. The most important thing is that you're thinking about it now.
        </p>
      </header>

      <section className="mb-4 mb-md-5">
        <Card className="border-0">
          <Card.Body className="p-3 p-md-4 p-lg-5">
            <h3 className="d-block mb-2 fs-hero fw-semibold">
              Your Financial Journey:<br/> A Recap
            </h3>
            <p className="font-sans fs-section mb-4">
              Here’s a look at the path you took through the simulation. Reflect on why you made these choices and what you might do differently in the real world.
            </p>

            {/* 小螢幕 1 欄；md 以上 2 欄 → 自動 1x4 / 2x2 */}
            <div className="row row-cols-1 row-cols-md-2 g-3">
                {scenarios.map((s, index) => {
                  const choiceKey = choices[s.id];
                  const choiceLabel = s.options.find(o => o.key === choiceKey)?.label;

                  return (
                    <div className="col" key={s.id}>
                      <Card
                        border="none"
                        className="h-100 text-white p-3 rounded-4"
                        style={{
                          backgroundColor: cardColors[index % cardColors.length],
                          border: "none",
                        }}
                      >
                        <Card.Body className="m-4">
                          <div className="mb-2 text-32 fw-bold">{s.title}</div>
                          <div>
                            {choiceKey ? (
                              <p className="ms-1 font-sans">
                                {choiceKey}）{choiceLabel}
                              </p>
                            ) : (
                              <span className="text-light">No Answer</span>
                            )}
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                  );
                })}
            </div>


            {/* Restart 按鈕（透明 outline，可隨螢幕撐大一點 padding） */}
            <div className="d-flex align-items-center justify-content-center gap-2 mt-4">
              <Button
                as={Link}
                to="/"
                variant="outline-primary"
                className="d-inline-flex align-items-center justify-content-center border-2 rounded-5 px-4 px-md-5 py-2"
              >
                <span className="me-1">Restart My Journey</span>
                <span className="material-symbols-outlined">arrow_right_alt</span>
              </Button>
            </div>
          </Card.Body>
        </Card>
      </section>

      <section className="bg-light rounded-4 p-3 p-md-4 p-lg-5 mb-4 mb-md-5">
        <header className="mb-3 mb-md-4">
          <h2 className="fs-hero fw-semibold mb-2">Continue Your Journey: <br/>Resources &amp; Next Steps</h2>
          <p className="font-sans fs-section mb-0">
            This simulation is just the beginning. Use these trusted resources to continue learning and start building your real-life financial plan.
          </p>
        </header>

        <div className="font-sans">
          <div className="mb-3">
            <h3 className="text-primary fs-cardtitle">Official Government &amp; Non-Profit Resources</h3>
            <ul className="fs-lead mb-0">
              <li><a href="http://StudentAid.gov" className="fw-semibold text-decoration-none">StudentAid.gov</a>: The official U.S. government resource for managing federal student loans. Use their loan simulator with your real numbers.</li>
              <li><a href="https://www.consumerfinance.gov/complaint/" className="fw-semibold text-decoration-none">Consumer Financial Protection Bureau (CFPB)</a>: Clear, unbiased info on credit cards, loans, mortgages, and more.</li>
              <li><a href="http://Investor.gov" className="fw-semibold text-decoration-none">Investor.gov</a>: SEC’s resource to help you invest wisely and avoid fraud.</li>
            </ul>
          </div>

          <div className="mb-3">
            <h3 className="text-primary fs-cardtitle">Recommended Books for Your Financial Bookshelf</h3>
            <ul className="fs-lead mb-0">
              <li><span className="text-primary fw-semibold">"The Psychology of Money"</span> – Morgan Housel</li>
              <li><span className="text-primary fw-semibold">"I Will Teach You to Be Rich"</span> – Ramit Sethi</li>
              <li><span className="text-primary fw-semibold">"The Simple Path to Wealth"</span> – JL Collins</li>
            </ul>
          </div>

          <div>
            <h3 className="text-primary fs-cardtitle">Financial Communities &amp; Support</h3>
            <ul className="fs-lead mb-0">
              <li>Your University's Financial Aid Office: personalized counseling and workshops.</li>
              <li>The r/personalfinance Subreddit: community Q&amp;A and their famous Prime Directive flowchart.</li>
            </ul>
          </div>
        </div>
      </section>

      <section
        className={`h-screen-section d-flex flex-column justify-content-center align-items-center text-center p-4 p-md-0 bg-contain-bottom`}
        style={{ backgroundImage: `url(${feedbackBg})` }}
      >
        <h2 className="fs-hero fw-semibold">Knowledge is the best investment you can make. Good luck!</h2>
      </section>
    </Container>
  );
}
