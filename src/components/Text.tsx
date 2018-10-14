import React, { StatelessComponent } from "react";
import classNames from "classnames";

export type Color =
  | "primary"
  | "secondary"
  | "gray"
  | "success"
  | "info"
  | "warning"
  | "error";

export type Size = "huge" | "big" | "medium" | "small";

export type Align = "left" | "center" | "right";

export type Props<T = React.HTMLAttributes<HTMLParagraphElement>> = T & {
  Component?: StatelessComponent<T>;
  color?: Color;
  size?: Size;
  align?: Align;
  uppercase?: boolean;
  lineThrough?: boolean;
  italic?: boolean;
};

const Text: StatelessComponent<Props> = props => {
  const {
    Component,
    className,
    color,
    size,
    align,
    uppercase,
    lineThrough,
    italic,
    ...rest
  } = props;
  const classes = classNames(className, {
    [`text-${color}`]: !!color,
    [`text-${size}`]: !!size,
    [`text-${align}`]: !!align,
    "text-uppercase": uppercase,
    "text-line-through": lineThrough,
    "text-italic": italic
  });
  return <Component {...rest} className={classes} />;
};

Text.defaultProps = {
  Component: props => React.createElement("p", props)
};

export default Text;
