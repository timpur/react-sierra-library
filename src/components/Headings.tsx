import React, { StatelessComponent } from "react";
import Text, { Props as TextProps, Size as TextSize } from "./Text";

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>;
export type Props = TextProps<HeadingProps>;

const BuildHeading: (
  type: string,
  size: TextSize
) => StatelessComponent<Props> = (type, size) => props => (
  <Text
    size={size}
    Component={(props: HeadingProps) => React.createElement(type, props)}
    {...props}
  />
);

export const H1 = BuildHeading("h1", "huge");
export const H2 = BuildHeading("h2", "big");
export const H3 = BuildHeading("h3", "medium");
export const H4 = BuildHeading("h4", "small");
