import React, { useState } from "react";
import iconComparison from "./icon-comparison.svg";
import { PlanCard } from "./PlanCard";
import Toggle from "react-toggle";
import "react-toggle/style.css";

export const Quote = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authenticateLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="quote">
      <div className="quote__container">
        <header className="quote__header">Select a plan</header>
        <div className="quote__toggle">
          <span className="quote__toggle-label">PAY MONTHLY</span>
          <div className="quote__toggle-icon">
            <Toggle className="toggle" icons={{ checked: "", unchecked: "" }} />
          </div>
          <span className="quote__toggle-label">PAY YEARLY</span>
        </div>
        <div className="quote__card-container">
          <PlanCard isGlobal={true} />
          <PlanCard isGlobal={false} />
        </div>
        <div className="quote__comparison">
          <a>Show me the full comparison table</a>
          <img src={iconComparison} />
        </div>
      </div>
    </div>
  );
};
