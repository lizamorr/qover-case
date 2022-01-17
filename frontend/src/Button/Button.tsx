import React from "react";

interface IButtonProps {
  text: string;
}

export const Button: React.FC<IButtonProps> = (props: IButtonProps) => (
  <button type="submit" className="button">
    {props.text}
  </button>
);
