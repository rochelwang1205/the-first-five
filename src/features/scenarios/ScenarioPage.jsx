import { useMemo, useState, useEffect } from "react";
import { Row, Col, Card, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { scenarios } from "../../data/scenarios";
import { useGameStore } from "../../store/useGameStore";
import { illustrationMap } from "@/assets/illustrations";

export default function ScenarioPage({ id }) {
  const navigate = useNavigate();
  const { setChoice } = useGameStore();

  const s = useMemo(() => scenarios.find(x => x.id === id), [id]);
  const [selected, setSelected] = useState(null);

  const total = scenarios.length;
  const current = id;

  useEffect(() => setSelected(null), [id]);

  if (!s) return <p>Can not find this scenario.</p>;

  const handleSubmit = () => {
    if (!selected) return;
    setChoice(id, selected);
    if (id < total) navigate(`/scenario/${id + 1}`);
    else navigate("/summary");
  };

  const imgKey = s.imageKey;
  const imgSrc = imgKey ? illustrationMap[imgKey] : undefined;

  return (
    <Row className="g-4 my-3">
      <Col md={6}>
        <div className="p-5 bg-light rounded h-100">
          <small className="d-inline-block mb-2 bg-dark px-4 py-2 mb-4 rounded-5 text-light">
            {current}/{total}
          </small>

          <div className="d-lg-flex align-items-start d-flex-column gap-3 mb-2">
            {imgSrc ? (
              <img src={imgSrc} alt={s.title} style={{ maxWidth: "120px", height: "auto" }} className="d-block d-lg-inline m-auto" />
            ) : (
              <small className="text-muted">（Can not find illustration: {imgKey}）</small>
            )}
            <div>
              <h2 className="mb-2 text-24 text-md-48">{s.title}</h2>
              <p className="mb-0 font-sans">{s.description}</p>
            </div>
          </div>

          <p className="text-24 mb-0 font-sans">{s.prompt}</p>
        </div>
      </Col>

      {/* 右欄（同樣用內層 wrapper） */}
      <Col md={6}>
        <div className="p-4 bg-light rounded h-100 d-flex flex-column">
          <h2 className="mt-2 mb-4 text-center">Decision</h2>
          <div className="d-grid gap-3 mb-3 font-sans">
            {s.options.map(opt => (
              <Card
                key={opt.key}
                border={selected === opt.key ? "primary" : "light"}
                role="button"
                tabIndex={0}
                onClick={() => setSelected(opt.key)}
                onKeyDown={e => (e.key === "Enter" || e.key === " ") && setSelected(opt.key)}
                style={{ cursor: "pointer" }}
              >
                <Card.Body className="d-flex justify-content-between align-items-center">
                  <span>
                    <strong>{opt.key}</strong>）{opt.label}
                  </span>
                  {selected === opt.key && <span className="badge bg-primary">selected</span>}
                </Card.Body>
              </Card>
            ))}
          </div>
          {!!selected && (
            <Alert variant="primary" className="mt-3 mb-0 font-sans">
              <strong>💡</strong> {s.feedback[selected]}
            </Alert>
          )}
          <div className="mb-auto pt-2 d-flex">
            <Button className="ms-auto btn-outlined d-flex align-items-center" variant="primary" onClick={handleSubmit} disabled={!selected}>
              {id < total ? "Next" : "See Summary"}<span className="material-symbols-outlined">arrow_right_alt</span>
            </Button>
          </div>
        </div>
      </Col>
    </Row>
  );
}
