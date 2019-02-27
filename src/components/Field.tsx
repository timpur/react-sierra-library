import classNames from "classnames";
import React, { Children, cloneElement, Fragment, StatelessComponent } from "react";

import Text from "./Text";

export interface IProps {
  error?: string;
  children: React.ReactElement<any>;
}

const Field: StatelessComponent<IProps> = (props) => {
  const { error, children } = props;
  const inError = !!error;

  return (
    <Fragment>
      {cloneElement(Children.only(children), { inError })}
      {inError && (
        <Text color="error" size="small">
          {error}
        </Text>
      )}
    </Fragment>
  );
};

export default Field;
