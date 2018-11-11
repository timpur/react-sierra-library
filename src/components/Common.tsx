import classNames from "classnames";
import React, { StatelessComponent } from "react";

type DivProps = React.HTMLAttributes<HTMLParagraphElement>;

const Section: StatelessComponent<DivProps> = (props) => {
  const { className, ...rest } = props;
  const classes = classNames(className, "section");

  return React.createElement("div", { ...rest, className: classes });
};

type Size = "medium" | "small";

export interface IProps extends DivProps {
  size?: Size;
}

const Container: StatelessComponent<IProps> = (props) => {
  const { className, size, ...rest } = props;
  const classes = classNames(className, {
    container: !size,
    [`container-${size}`]: !!size,
  });

  return React.createElement("div", { ...rest, className: classes });
};

export { Section, Container };
