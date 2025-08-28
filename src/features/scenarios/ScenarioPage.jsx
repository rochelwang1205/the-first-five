import { useMemo, useState } from "react";
import { Card, Button, Alert, ProgressBar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { scenarios } from "../../data/scenarios";
import { useGameStore } from "../../store/useGameStore";

export default function ScenarioPage({ id }){
  const navigate = useNavigate();
  const { choices, setChoice } = useGameStore();
  const s = useMemo(()=>scenarios.find(x=>x.id===id), [id]);
  const [selected, setSelected] = useState(choices[id]);
  const progress = Math.round(((id-1)/4)*100);

  if(!s) return <p>找不到此情境。</p>;

  const handleSubmit = () => {
    if(!selected) return;
    setChoice(id, selected);
    if(id<4) navigate(`/scenario/${id+1}`);
    else navigate("/summary");
  };

  return (
    <div>
      <h2 className="mb-2">{s.title}</h2>
      <ProgressBar now={progress} label={`${progress}%`} className="mb-3"/>
      <p className="text-muted">{s.prompt}</p>

      <div className="d-grid gap-3 my-4">
        {s.options.map(opt=>(
          <Card key={opt.key} border={selected===opt.key ? "primary" : "light"} onClick={()=>setSelected(opt.key)} style={{cursor:"pointer"}}>
            <Card.Body className="d-flex justify-content-between align-items-center">
              <span><strong>{opt.key}</strong>）{opt.label}</span>
              {selected===opt.key && <span className="badge bg-primary">已選</span>}
            </Card.Body>
          </Card>
        ))}
      </div>

      {!!selected && (
        <>
          <Alert variant="info"><strong>即時回饋：</strong>{s.feedback[selected]}</Alert>
          <Card className="mb-3">
            <Card.Body>
              <strong>學習重點：</strong>
              <ul className="mb-0">{s.learningPoints.map((p,i)=><li key={i}>{p}</li>)}</ul>
            </Card.Body>
          </Card>
          {s.tips?.length>0 && (
            <Alert variant="secondary">
              <strong>延伸提示：</strong>
              <ul className="mb-0">{s.tips.map((t,i)=><li key={i}>{t}</li>)}</ul>
            </Alert>
          )}
        </>
      )}

      <div className="d-flex gap-2">
        <Button variant="primary" onClick={handleSubmit} disabled={!selected}>
          {id<4 ? "下一題" : "前往結局頁"}
        </Button>
      </div>
    </div>
  );
}
