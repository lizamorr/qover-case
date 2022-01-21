import React, { useState } from "react";
import iconComparison from "./icon-comparison.svg";
import { PlanCard } from "./PlanCard";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import { GLOBAL_PLAN, UNIVERSAL_PLAN } from "./constants";
import { RootStateOrAny, useSelector } from "react-redux";

export const Quote = () => {
  const [selectedPlan, setSelectedPlan] = useState("global");
  const [isYearly, setIsYearly] = useState(true);
  const quote = useSelector((state: RootStateOrAny) => state.quote);

  const handleToggleChange = async (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    setIsYearly(!isYearly);
  };

  return (
    <div className="quote">
      <div className="quote__container">
        <header className="quote__header">Select a plan</header>
        <div className="quote__toggle">
          <span className="quote__toggle-label">PAY MONTHLY</span>
          <div className="quote__toggle-icon">
            <Toggle
              checked={isYearly}
              onChange={(e) => handleToggleChange(e)}
              className="toggle"
              icons={{ checked: "", unchecked: "" }}
            />
          </div>
          <span className="quote__toggle-label">PAY YEARLY</span>
        </div>
        <div className="quote__card-container">
          <PlanCard
            quote={quote.global}
            type={GLOBAL_PLAN}
            isSelected={selectedPlan === GLOBAL_PLAN}
            onSelectedPlan={setSelectedPlan}
            isYearly={isYearly}
          />
          <PlanCard
            quote={quote.universal}
            type={UNIVERSAL_PLAN}
            isSelected={selectedPlan === UNIVERSAL_PLAN}
            onSelectedPlan={setSelectedPlan}
            isYearly={isYearly}
          />
        </div>
        <div className="quote__comparison">
          <a>Show me the full comparison table</a>
          <img src={iconComparison} alt="Comparison icon" />
        </div>
      </div>
    </div>
  );
};
