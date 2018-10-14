import React, { Component } from "react";

import Button from "sierra-library-react/components/Button";
import { H1, H2, H3 } from "sierra-library-react/components/Headings";

class Buttons extends Component {
  render() {
    return (
      <div>
        <H1>Buttons</H1>
        <H3 color="gray">Button colors</H3>
        <div>
          <Button>Default</Button>
          <Button color="primary">Primary</Button>
          <Button color="outlines">Outlines</Button>
          <Button color="secondary">Secondary</Button>
          <Button disabled>Disabled</Button>
          <Button color="white">White</Button>
          <Button color="green">Green</Button>
          <Button color="red">Red</Button>
          <Button color="transparent">Transparent</Button>
        </div>
      </div>
    );
  }
}

export default Buttons;
