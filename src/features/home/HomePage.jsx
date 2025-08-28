import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="p-3">
      <h2>Financial Choices：四大新鮮人理財情境</h2>
      <p className="text-muted">每題三選一，選後立即看到學習重點與回饋。</p>
      <ul>
        <li>學貸十字路口：現金流 vs 總成本</li>
        <li>第一份工作：雇主匹配的「免費錢」</li>
        <li>第一個租屋選擇：品質、時間與預算</li>
        <li>意外獎金分配：還債、投資、緊急金</li>
      </ul>
      <Button as={Link} to="/scenario/1">開始</Button>
    </div>
  );
}
