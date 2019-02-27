import classNames from "classnames";
import React, { StatelessComponent } from "react";
import { Dict } from "../types";

type DivProps = React.HTMLAttributes<HTMLParagraphElement>;

// ---- Row ---- //

export interface IRowProps extends DivProps {
  reverse?: boolean;
}

export const Row: StatelessComponent<IRowProps> = ({ reverse, className, ...props }) => {
  const classes = classNames("row", { reverse }, className);
  return <div {...props} className={classes} />;
};

// ---- Col ---- //

type ColSize = boolean | number | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "auto";
type ColOrder = number | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "first";
type ColOffset = number | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11";

interface SizeProps<T> {
  xs?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
}

export interface IColProps extends SizeProps<ColSize>, DivProps {
  order?: SizeProps<ColOrder>;
  offset?: SizeProps<ColOffset>;
}

export const Col: StatelessComponent<IColProps> = ({ xs, sm, md, lg, xl, order, offset, ...props }) => {
  const classes = classNames(
    {
      [`col-xs-${xs}`]: xs,
      [`col-sm-${sm}`]: sm,
      [`col-md-${md}`]: md,
      [`col-lg-${lg}`]: lg,
      [`col-xl-${xl}`]: xl,
      col: xs || sm || md || lg || xl,
    },
    Object.keys(order).reduce((res, key) => {
      res[`order-${key}-${order[key]}`] = order[key];
      return res;
    }, {}),
    Object.keys(offset).reduce((res, key) => {
      res[`offset-${key}-${order[key]}`] = order[key];
      return res;
    }, {}),
  );

  return <div {...props} className={classes} />;
};
