import React, { StatelessComponent } from "react";

import Button from "react-sierra-library/components/Button";
import ButtonGroup from "react-sierra-library/components/ButtonGroup";
import { H1, H3 } from "react-sierra-library/components/Headings";

const Buttons: StatelessComponent = () => (
  <div>
    <H1>Buttons</H1>
    <H3 color="gray">Button colors</H3>
    <div>
      <Button mobile color="primary">
        Primary
      </Button>
      <Button mobile color="secondary">
        Secondary
      </Button>
      <Button mobile disabled>
        Disabled
      </Button>
      <Button mobile color="green">
        Green
      </Button>
      <Button mobile color="red">
        Red
      </Button>
      <Button mobile color="outlined">
        Outlined
      </Button>
      <Button mobile color="transparent">
        Transparent
      </Button>
    </div>
    <H3 color="gray">Buttons with icon</H3>
    <div>
      <Button mobile>Button icon</Button>
    </div>
    <H3 color="gray">Button group</H3>
    <ButtonGroup>
      <Button>Default</Button>
      <Button>Default</Button>
      <Button>Default</Button>
    </ButtonGroup>
    <H3 color="gray">Button sizes</H3>
    <div>
      <Button mobile size="big">
        Button Big
      </Button>
      <Button mobile>Button Default</Button>
      <Button mobile size="small">
        Button Small
      </Button>
    </div>
  </div>
);

export default Buttons;
