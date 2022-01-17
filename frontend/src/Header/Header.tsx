import React from "react";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

export const Header: React.FC = () => (
  <header className="header">
    <div className="header__content">
      <ArrowBackIosNewRoundedIcon style={{ color: "white", width: "7px" }} />
      <span className="header__content-title">QOVER.ME</span>
    </div>
  </header>
);
