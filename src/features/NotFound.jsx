import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="p-3">
      <h2>頁面未找到</h2>
      <p className="text-muted">抱歉，您所訪問的頁面不存在。</p>
      <Button as={Link} to="/">返回首頁</Button>
    </div>
  );
}