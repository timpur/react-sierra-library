import classNames from "classnames";
import React, { Fragment, StatelessComponent } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export interface IProps extends InputProps {
  label: string;
  inError?: boolean;
  full?: boolean;
}

const Input: StatelessComponent<IProps> = (props) => {
  const { label, inError, full, className, ...rest } = props;
  const classes = classNames(className, "input", {
    "error": inError,
    "full-width": full,
  });
  return (
    <Fragment>
      <label className="label" htmlFor={rest.id}>
        {label}
      </label>
      <div className={classes}>
        <input {...rest} />
      </div>
    </Fragment>
  );
};

export default Input;
