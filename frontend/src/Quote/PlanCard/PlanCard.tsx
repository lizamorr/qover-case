import React from "react";
import validCheckBlue from "./valid-check-blue.svg";
import validCheckWhite from "./valid-check-white.svg";
import classNames from "classnames";
import { GLOBAL_PLAN, MONTHS_IN_YEAR, UNIVERSAL_PLAN } from "../constants";
import { PlanType } from "../types";

interface IPlanCardProps {
  isYearly: boolean;
  isSelected: boolean;
  type: PlanType;
  onSelectedPlan: (plan: string) => void;
  price: number;
}

const plans = {
  [GLOBAL_PLAN]: {
    title: "Global",
    durationTravel: 90,
    medicalExpenses: "1.000.000",
    personalAssistance: "5.000",
    travelAssistance: "1.000",
    coverageDuration: 1,
  },
  [UNIVERSAL_PLAN]: {
    title: "Universe",
    durationTravel: 180,
    medicalExpenses: "3.000.000",
    personalAssistance: "10.000",
    travelAssistance: "2.500",
    coverageDuration: 1,
  },
};

export const PlanCard = ({
  isSelected = false,
  onSelectedPlan,
  type = GLOBAL_PLAN,
  isYearly,
  price = 0,
}: IPlanCardProps) => {
  const handlePlanSelection = () => {
    onSelectedPlan(type);
  };

  const formatCurrency = (price: number, isYearly: boolean) => {
    let finalPrice = !isYearly ? price / MONTHS_IN_YEAR : price;
    return new Intl.NumberFormat("nl-BE", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 2,
    })
      .format(finalPrice)
      .substring(1);
  };

  return (
    <div
      className={classNames(
        "plan-card",
        `plan-card${type === GLOBAL_PLAN ? "--blue" : "--white"}`
      )}
    >
      <div className="plan-card__content">
        <header className="plan-card__header">{plans[type].title}</header>
        <hr />
        <div
          className={`plan-card__price-container${
            type === GLOBAL_PLAN ? "--blue" : "--white"
          }`}
        >
          <div className="plan-card__price">
            {formatCurrency(price, isYearly)}

            <div className="euro">&euro;</div>
          </div>
          <span className="plan-card__price-tax">
            {isYearly ? "YEARLY" : "MONTHLY"} INCL. TAXES
          </span>
        </div>
        <hr />
        <p className="plan-card__item">
          Maximum duration travel{" "}
          <span className="plan-card__item--light">of </span>
          {plans[type].durationTravel} days
        </p>
        <hr />
        <p className="plan-card__item">
          Medical expenses reimbursement{" "}
          <span className="plan-card__item--light">up to </span>
          {plans[type].medicalExpenses}
        </p>
        <hr />
        <p className="plan-card__item">
          Personal assistance abroad{" "}
          <span className="plan-card__item--light">up to </span>
          {plans[type].personalAssistance}
        </p>
        <hr />
        <p className="plan-card__item">
          Travel assistance abroad{" "}
          <span className="plan-card__item--light">up to </span>
          {plans[type].travelAssistance}
          <span className="plan-card__item--light">
            {" "}
            per insured per travel
          </span>
        </p>
        <hr />
        <p className="plan-card__item">
          Coverage duration: {plans[type].coverageDuration} year
        </p>
        <hr />
        <div className="plan-card__button-container">
          <button
            className={classNames(
              "plan-card__button",
              `plan-card__button${type === GLOBAL_PLAN ? "--white" : "--blue"}`
            )}
            onClick={handlePlanSelection}
          >
            <div className="plan-card__button-content">
              {isSelected && (
                <img
                  className="valid-check"
                  src={type === GLOBAL_PLAN ? validCheckBlue : validCheckWhite}
                />
              )}
              <span>{isSelected ? "Plan Selected" : "Choose this plan"}</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
