import React from "react";

interface IPlanCardProps {
  isGlobal?: boolean;
}

export const PlanCard = ({ isGlobal = false }: IPlanCardProps) => (
  <div className={isGlobal ? "plan-card--blue" : "plan-card--white"}>
    <div className="plan-card__content">
      <header className="plan-card__header">
        {isGlobal ? "Global" : "Universe"}
      </header>
      <div className="plan-card__price">
        <p>price</p>
        <span>YEARLY INCL. TAXES</span>
      </div>
      <p className="plan-card__item">Maximum duration travel of days</p>
      <p className="plan-card__item">Medical expenses reimbursement up to</p>
      <p className="plan-card__item">Personal assistance abroad up to</p>
      <p className="plan-card__item">
        Travel assistance abroad up to per insured per travel
      </p>
      <p className="plan-card__item">Coverage duration:</p>
      <button></button>
    </div>
  </div>
);
