import classNames from "classnames";
import React, { StatelessComponent } from "react";

export type Color =
  | "primary"
  | "secondary"
  | "green"
  | "red"
  | "outlined"
  | "transparent";

export type Size = "big" | "small";

export interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: Color;
  size?: Size;
  disabled?: boolean;
  mobile?: boolean;
}

const Button: StatelessComponent<IProps> = (props) => {
  const { className, color, size, disabled, mobile, ...rest } = props;
  const classes = classNames(className, "button", {
    [`button--${color}`]: !!color,
    [`button--${size}`]: !!size,
    "button--disabled": disabled,
    "button--mobileFull": mobile,
  });
  return <button className={classes} disabled={disabled} {...rest} />;
};

export default Button;
