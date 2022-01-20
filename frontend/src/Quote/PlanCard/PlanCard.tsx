import React, { useState } from "react";
import validCheckBlue from "./valid-check-blue.svg";
import validCheckWhite from "./valid-check-white.svg";
import classNames from "classnames";

interface IPlanCardProps {
  isSelected: boolean;
  plan: string;
  onSelectedPlan: (plan: string) => void;
}

export const PlanCard = ({
  isSelected = false,
  onSelectedPlan,
  plan = "global",
}: IPlanCardProps) => {
  const handlePlanSelection = () => {
    onSelectedPlan(plan);
  };

  return (
    <div
      className={classNames(
        "plan-card",
        `plan-card${plan === "global" ? "--blue" : "--white"}`
      )}
    >
      <div className="plan-card__content">
        <header className="plan-card__header">
          {plan === "global" ? "Global" : "Universe"}
        </header>
        <hr />
        <div
          className={`plan-card__price-container${
            plan === "global" ? "--blue" : "--white"
          }`}
        >
          <div className="plan-card__price">
            78,60
            <div className="euro">&euro;</div>
          </div>
          <span className="plan-card__price-tax">YEARLY INCL. TAXES</span>
        </div>
        <hr />
        <p className="plan-card__item">Maximum duration travel of days</p>
        <hr />
        <p className="plan-card__item">Medical expenses reimbursement up to</p>
        <hr />
        <p className="plan-card__item">Personal assistance abroad up to</p>
        <hr />
        <p className="plan-card__item">
          Travel assistance abroad up to per insured per travel
        </p>
        <hr />
        <p className="plan-card__item">Coverage duration:</p>
        <hr />
        <div className="plan-card__button-container">
          <button
            className={classNames(
              "plan-card__button",
              `plan-card__button${plan === "global" ? "--white" : "--blue"}`
            )}
            onClick={handlePlanSelection}
          >
            {isSelected && (
              <img
                className="valid-check"
                src={plan === "global" ? validCheckBlue : validCheckWhite}
              />
            )}
            {isSelected ? "Plan Selected" : "Choose this plan"}
          </button>
        </div>
      </div>
    </div>
  );
};
