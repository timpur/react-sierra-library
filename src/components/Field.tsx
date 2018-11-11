import classNames from "classnames";
import React, { cloneElement, Fragment, StatelessComponent } from "react";

import Text from "./Text";

export interface IProps {
  error?: string;
  children: React.ReactElement<any>;
}

const Field: StatelessComponent<IProps> = (props) => {
  const { error, children } = props;
  const inError = !!error;
  const errorText = inError && (
    <Text color="error" size="small">
      {error}
    </Text>
  );
  return (
    <Fragment>
      {cloneElement(children, { inError })}
      {errorText}
    </Fragment>
  );
};

export default Field;
