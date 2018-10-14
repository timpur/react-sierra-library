import React, { StatelessComponent } from "react";
import classNames from "classnames";

export type Color =
  | "primary"
  | "secondary"
  | "outlines"
  | "white"
  | "green"
  | "red"
  | "transparent";

export type Size = "huge" | "big" | "small";

export type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: Color;
  size?: Size;
  disabled?: boolean;
  mobile?: boolean;
  large?: boolean;
};

const Button: StatelessComponent<Props> = props => {
  const { className, color, size, disabled, mobile, large, ...rest } = props;
  const classes = classNames(className, "button", {
    [`button-${color}`]: !!color,
    [`button-${size}`]: !!size,
    "button-disabled": disabled,
    "block-mobile": mobile,
    "button-large": large
  });
  return <button {...rest} className={classes} disabled={disabled} />;
};

export default Button;
