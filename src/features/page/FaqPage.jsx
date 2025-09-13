import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function FaqPage() {
  const faqBg = `${import.meta.env.BASE_URL}background/desktop/home-1440.png`;
  return (
    <>
    <div style={{ backgroundImage: `url(${faqBg})`, backgroundSize: "contain", backgroundPosition: "center top", backgroundRepeat: "repeat" }}>
      <div className="p-3 mx-5">
        <h1 className="text-center py-4">FAQs</h1>
        <section className="bg-primary text-white p-4 my-3 rounded-4">
          <div className="bg-dark rounded-circle d-inline-flex justify-content-center align-items-center text-24 fw-bold m-2" style={{ width: "3rem", height: "3rem" }}>1</div>
          <h2 className="fw-bold">What is THE FIRST FIVE (TF5)?</h2>
          <p className="font-sans fw-regular text-20">This is an online learning simulator that provides various financial application scenarios. Here you may find questions you have never thought about before, regulark in advance and get some directions and suggested resources.</p>
        </section>
        <section className="bg-primary text-white p-4 my-3 rounded-4">
          <div className="bg-dark rounded-circle d-inline-flex justify-content-center align-items-center text-24 fw-bold m-2" style={{ width: "3rem", height: "3rem" }}>2</div>
          <h2 className="fw-bold">What led to the creation of TF5?</h2>
          <p className="font-sans fw-regular text-20">In an era of rapid digital financial development and rampant financial fraud, people are generally facing a lack of financial knowledge. This is particularly true for younger generations, who face a gap between their regularking and behavior when it comes to understanding financial products, using digital tools, and financial planning. Therefore, improving financial literacy has become a crucial issue. TF5 was created to empower people to proactively regulark ahead and grow.</p>
        </section>
        <section className="bg-primary text-white p-4 my-3 rounded-4">
          <div className="bg-dark rounded-circle d-inline-flex justify-content-center align-items-center text-24 fw-bold m-2" style={{ width: "3rem", height: "3rem" }}>3</div>
          <h2 className="fw-bold">Who can use TF5？</h2>
          <p className="font-sans fw-regular text-20">We hope this platform can help high school and college students who lack knowledge and experience or feel uncertain about their future. Of course, the general public who is interested in financial literacy can also participate in TF5.</p>
        </section>
        <section className="bg-primary text-white p-4 my-3 rounded-4">
          <div className="bg-dark rounded-circle d-inline-flex justify-content-center align-items-center text-24 fw-bold m-2" style={{ width: "3rem", height: "3rem" }}>4</div>
          <h2 className="fw-bold">How to use TF5？</h2>
          <p className="font-sans fw-regular text-20">You can begin a deep reflection journey directly from the homepage, with various real-life scenarios and guidance to help you expand your financial reflection and self-practice. Finally, you'll receive additional online resources to help you continue your exploration and development of financial literacy.</p>
        </section>
        <section className="bg-dark text-white p-4 my-3 rounded-4">
          <div className="bg-light text-dark rounded-circle d-inline-flex justify-content-center align-items-center text-24 fw-bold m-2" style={{ width: "3rem", height: "3rem" }}>#</div>
          <h2 className="fw-bold">Team member</h2>
          <div>
            <p className="font-sans fw-regular text-20">Engineer｜Rochelle Wang, Developer. Develop for TF5.<br/>
            Designer｜Sophie Wang,  visual designer. Designing the visual identity and UI for TF5.</p>
          </div>
        </section>
    </div>
    </div>
    </>
  );
}
