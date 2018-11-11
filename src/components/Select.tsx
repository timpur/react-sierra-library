import classNames from "classnames";
import React, { Fragment, StatelessComponent } from "react";

type InputProps = React.SelectHTMLAttributes<HTMLSelectElement>;

export interface IOption {
  label: string;
  value: string;
}

export interface IProps extends InputProps {
  label: string;
  options: Array<string | IOption>;
  inError?: boolean;
  full?: boolean;
}

const Select: StatelessComponent<IProps> = (props) => {
  const { label, inError, full, options, className, ...rest } = props;
  const classes = classNames(className, "select", {
    "error": inError,
    "full-width": full,
  });
  const mappedOptions = options
    .map((item) => {
      if (typeof item === "string") {
        return { label: item, value: item };
      }
      return item;
    })
    .map((item) => (
      <option key={item.value} value={item.value}>
        {item.label}
      </option>
    ));
  return (
    <Fragment>
      <label className="label" htmlFor={rest.id}>
        {label}
      </label>
      <div className={classes}>
        <select {...rest}>{mappedOptions}</select>
      </div>
    </Fragment>
  );
};

export default Select;
