import classNames from "classnames";
import React, { StatelessComponent } from "react";
import {
  excludeKeys,
  getKeyValuePairPick,
  InferArrayType,
  stringLiteralArray,
} from "../helpers";

type DivProps = React.HTMLAttributes<HTMLParagraphElement>;

// ---- Grid ----- //

export interface IGridProps extends DivProps {
  fluid?: boolean;
}

const Grid: StatelessComponent<IGridProps> = (props) => {
  const { className, fluid, ...rest } = props;
  const classes = classNames(
    className,
    fluid ? "container-fluid" : "container",
  );

  return React.createElement("div", { className: classes, ...rest });
};

// ---- Row ---- //

const sizes = stringLiteralArray(["xs", "sm", "md", "lg", "xl"]);
type Size = InferArrayType<typeof sizes>;

const rowKeys = stringLiteralArray([
  "start",
  "center",
  "end",
  "top",
  "middle",
  "bottom",
  "around",
  "between",
]);
type RowKeyType = { [K in InferArrayType<typeof rowKeys>]?: Size };

export interface IRowProps extends RowKeyType, DivProps {
  reverse?: boolean;
}

const Row: StatelessComponent<IRowProps> = (props) => {
  const rowClasses = getKeyValuePairPick(props, rowKeys).map(
    ({ key, value }) => `${key}-${value}`,
  );
  const { reverse, className, ...rest } = excludeKeys(props, rowKeys);
  const classes = classNames(className, "row", rowClasses, { reverse });

  return React.createElement("div", { className: classes, ...rest });
};

// ---- Col ---- //

type ColumnSize = number | boolean;

const colKeys = sizes;
const colOffsetKeys = stringLiteralArray([
  "xsOffset",
  "smOffset",
  "mdOffset",
  "lgOffset",
  "xlOffset",
]);

type ColKeysType = { [K in InferArrayType<typeof colKeys>]?: ColumnSize };
type ColOffsetKeysType = {
  [K in InferArrayType<typeof colOffsetKeys>]?: number
};

export interface IColProps extends ColKeysType, ColOffsetKeysType, DivProps {
  first?: Size;
  last?: Size;
}

const Col: StatelessComponent<IColProps> = (props) => {
  const colClasses = getKeyValuePairPick(props, colKeys).map(
    ({ key, value }) => `col-${key}-${value}`,
  );
  const colOffsetClasses = getKeyValuePairPick(props, colOffsetKeys).map(
    ({ key, value }) => `col-${key}-offset-${value}`,
  );

  const { first, last, className, ...rest } = excludeKeys(props, [
    ...colKeys,
    ...colOffsetKeys,
  ]);
  const classes = classNames(className, colClasses, colOffsetClasses, {
    [`first-${first}`]: !!first,
    [`last-${last}`]: !!last,
  });

  return React.createElement("div", { className: classes, ...rest });
};

export { Row, Col, Grid };
