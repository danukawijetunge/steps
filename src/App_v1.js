import { useState } from "react";
import "./index.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function Step() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function stepNext() {
    if (step <= 2) setStep((step) => step + 1);
  }

  function stepPrev() {
    console.log(step);
    if ((step <= 3) & (step > 1)) setStep((step) => step - 1);
  }

  function makeItDisapper() {
    console.log("inside the makeItDisapper");
    setIsOpen((prev) => !prev);
  }

  return (
    <>
      <button className="close" onClick={makeItDisapper}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}> 1</div>
            <div className={`${step >= 2 ? "active" : ""}`}> 2 </div>
            <div className={`${step >= 3 ? "active" : ""}`}> 3 </div>
          </div>
          <div className="message">
            {" "}
            Step {step} : {messages[step - 1]}{" "}
          </div>
          <div className="buttons">
            <button
              className="button"
              onClick={stepPrev}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              previous
            </button>
            <button
              className="button"
              onClick={stepNext}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default function App() {
  return (
    <>
      <Step />
    </>
  );
}
