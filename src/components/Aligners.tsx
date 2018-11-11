import classNames from "classnames";
import React, { StatelessComponent } from "react";

type DivProps = React.HTMLAttributes<HTMLParagraphElement>;

export type Align =
  | "space-between"
  | "space-around"
  | "start"
  | "end"
  | "center-horitzontal"
  | "center-vertical";

type AlignType = { [K in Align]: boolean };

interface IProps extends AlignType {}
