import React from "react";

interface IButtonProps {
  text: string;
}

export const Button = (props: IButtonProps) => (
  <button type="submit" className="button">
    {props.text}
  </button>
);
