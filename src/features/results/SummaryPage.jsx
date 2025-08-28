import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useGameStore } from "../../store/useGameStore";
import { scenarios } from "../../data/scenarios";

export default function SummaryPage(){
  const { choices, reset } = useGameStore();

  const resourceGovIntl = [
    { name:"U.S. Dept. of Education（學生貸款）", url:"https://studentaid.gov/" },
    { name:"CFPB（金融消費者保護）", url:"https://www.consumerfinance.gov/" },
    { name:"IRS 退休帳戶/401(k) 規則", url:"https://www.irs.gov/retirement-plans" },
  ];
  const resourceGovTW = [
    { name:"金管會 金融知識專區", url:"https://www.fsc.gov.tw/" },
    { name:"金融消費評議中心", url:"https://www.fec.gov.tw/" },
    { name:"勞保局 勞退新制", url:"https://www.bli.gov.tw/" },
  ];
  const resourceNPO = [
    { name:"Investopedia", url:"https://www.investopedia.com/" },
    { name:"Khan Academy – Personal Finance", url:"https://www.khanacademy.org/" },
  ];
  const books = [
    "The Simple Path to Wealth（J. L. Collins）",
    "A Random Walk Down Wall Street（Burton G. Malkiel）",
    "I Will Teach You to Be Rich（Ramit Sethi）",
    "行為經濟學入門／心理帳戶（Thaler 相關）",
    "窮查理的普通常識（Charles T. Munger）",
  ];

  return (
    <div>
      <h2 className="mb-3">🎉 恭喜通關！你的理財抉擇地圖出爐</h2>
      <p className="text-muted">
        你完成了 4 個關鍵人生情境的選擇！沒有絕對對錯，只有最符合你現況的取捨。
        帶著這份自我認識，持續調整現金流、儲蓄與投資策略，讓金錢為你的生活目標服務。做得好！
      </p>

      <Card className="mb-4">
        <Card.Body>
          <strong>你的選擇回顧</strong>
          <ul className="mb-0">
            {scenarios.map(s => (
              <li key={s.id}>
                {s.title}：<strong>{choices[s.id] ?? "尚未作答"}</strong>
              </li>
            ))}
          </ul>
        </Card.Body>
      </Card>

      <div className="row g-3">
        <div className="col-md-6">
          <Card><Card.Body>
            <strong>政府與公共資訊（國際/美國）</strong>
            <ul className="mb-0">
              {resourceGovIntl.map(r=>(
                <li key={r.url}><a href={r.url} target="_blank" rel="noreferrer">{r.name}</a></li>
              ))}
            </ul>
          </Card.Body></Card>
        </div>
        <div className="col-md-6">
          <Card><Card.Body>
            <strong>政府與公共資訊（臺灣）</strong>
            <ul className="mb-0">
              {resourceGovTW.map(r=>(
                <li key={r.url}><a href={r.url} target="_blank" rel="noreferrer">{r.name}</a></li>
              ))}
            </ul>
          </Card.Body></Card>
        </div>
        <div className="col-md-6">
          <Card><Card.Body>
            <strong>非營利與學習平台</strong>
            <ul className="mb-0">
              {resourceNPO.map(r=>(
                <li key={r.url}><a href={r.url} target="_blank" rel="noreferrer">{r.name}</a></li>
              ))}
            </ul>
          </Card.Body></Card>
        </div>
        <div className="col-md-6">
          <Card><Card.Body>
            <strong>書單推薦</strong>
            <ul className="mb-0">{books.map(b=><li key={b}>{b}</li>)}</ul>
          </Card.Body></Card>
        </div>
      </div>

      <div className="d-flex gap-2 mt-4">
        <Button as={Link} to="/scenario/1" variant="primary">重玩一次</Button>
        <Button variant="outline-secondary" onClick={reset}>清除紀錄</Button>
      </div>
    </div>
  );
}
