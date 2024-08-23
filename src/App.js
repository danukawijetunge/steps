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
          <Message action={step}>{messages}</Message>
          <div className="buttons">
            <Button step={stepPrev} bgColor="7950f2" textColor="fff">
              Previous
            </Button>
            <Button step={stepNext} bgColor="7950f2" textColor="fff">
              Next
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Message({ action, children }) {
  return (
    <>
      <div className="message">
        Step {action} : {children[action - 1]}{" "}
      </div>
    </>
  );
}

function Button({ step, textColor, bgColor, children }) {
  return (
    <>
      <button
        className="button"
        onClick={step}
        style={{ backgroundColor: "#7950f2", color: "#fff" }}
      >
        {children}
      </button>
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
