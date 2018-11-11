import React, { StatelessComponent } from "react";
import Text, { Props as TextProps, Size as TextSize } from "./Text";

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>;

export interface IProps extends TextProps<HeadingProps> {}

const H1: StatelessComponent<IProps> = (props) => (
  <Text tagName="h1" size="huge" {...props} />
);
const H2: StatelessComponent<IProps> = (props) => (
  <Text tagName="h2" size="big" {...props} />
);
const H3: StatelessComponent<IProps> = (props) => (
  <Text tagName="h3" size="medium" {...props} />
);
const H4: StatelessComponent<IProps> = (props) => (
  <Text tagName="h4" size="small" {...props} />
);

export { H1, H2, H3, H4 };
