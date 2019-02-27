import classNames from "classnames";
import React, { StatelessComponent } from "react";

export type Color = "primary" | "secondary" | "gray" | "success" | "info" | "warning" | "error";

export type Size = "huge" | "big" | "medium" | "small";

export type Align = "left" | "center" | "right";

export type Props<T = React.HTMLAttributes<HTMLParagraphElement>> = T & {
  tagName?: string;
  color?: Color;
  size?: Size;
  align?: Align;
  uppercase?: boolean;
  lineThrough?: boolean;
  italic?: boolean;
};

const Text: StatelessComponent<Props> = (props) => {
  const { tagName, className, color, size, align, uppercase, lineThrough, italic, ...rest } = props;
  const classes = classNames(className, {
    [`text-${color}`]: !!color,
    [`text-${size}`]: !!size,
    [`align-${align}`]: !!align,
    "text-italic": italic,
    "text-line-through": lineThrough,
    "text-uppercase": uppercase,
  });

  return React.createElement(tagName, { className: classes, ...rest });
};

Text.defaultProps = {
  tagName: "p",
  size: "medium",
};

export default Text;
