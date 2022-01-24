import React, { useEffect, useState } from "react";
import iconComparison from "./icon-comparison.svg";
import { PlanCard } from "./PlanCard";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import { GLOBAL_PLAN, UNIVERSAL_PLAN } from "./constants";
import { QuoteState } from "../store/quoteSlice";
import { RootStateOrAny, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Quote = () => {
  const [selectedPlan, setSelectedPlan] = useState("global");
  const [isYearly, setIsYearly] = useState(true);
  const globalPrices: QuoteState = useSelector(
    (state: RootStateOrAny) => state.quote
  );
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async (): Promise<void> => {
      if (!localStorage.getItem("jwt")) {
        alert("Please log in.");
        navigate("/");
      }
      // if (globalPrices.global === 0 && globalPrices.universal === 0) {
      //   alert("Please fill out a quote request.");
      //   navigate("/cars");
      // }
    };
    getUser();
  }, []);

  const handleToggleChange = async (
    event: React.FormEvent<HTMLInputElement>
  ): Promise<void> => {
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
            price={globalPrices.global}
            type={GLOBAL_PLAN}
            isSelected={selectedPlan === GLOBAL_PLAN}
            onSelectedPlan={setSelectedPlan}
            isYearly={isYearly}
          />
          <PlanCard
            price={globalPrices.universal}
            type={UNIVERSAL_PLAN}
            isSelected={selectedPlan === UNIVERSAL_PLAN}
            onSelectedPlan={setSelectedPlan}
            isYearly={isYearly}
          />
        </div>
        <div className="quote__comparison">
          <span>Show me the full comparison table</span>
          <img src={iconComparison} alt="Comparison icon" />
        </div>
      </div>
    </div>
  );
};
