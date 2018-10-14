import React, { StatelessComponent } from "react";
import classNames from "classnames";

const ButtonGroup: StatelessComponent<
  React.HTMLAttributes<HTMLDivElement>
> = props => (
  <div {...props} className={classNames(props.className, "button-group")} />
);

export default ButtonGroup;
