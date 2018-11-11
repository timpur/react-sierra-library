import classNames from "classnames";
import React, { Fragment, StatelessComponent } from "react";

type InputProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export interface IProps extends InputProps {
  label: string;
  inError?: boolean;
  full?: boolean;
}

const Textarea: StatelessComponent<IProps> = (props) => {
  const { label, inError, full, className, ...rest } = props;
  const classes = classNames(className, "textarea", {
    "error": inError,
    "full-width": full,
  });
  return (
    <Fragment>
      <label className="label" htmlFor={rest.id}>
        {label}
      </label>
      <div className={classes}>
        <textarea {...rest} />
      </div>
    </Fragment>
  );
};

export default Textarea;
