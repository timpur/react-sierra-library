import React, { StatelessComponent } from "react";

import Button from "sierra-library-react/components/Button";
import ButtonGroup from "sierra-library-react/components/ButtonGroup";
import { H1, H3 } from "sierra-library-react/components/Headings";

const Buttons: StatelessComponent = () => (
  <div>
    <H1>Buttons</H1>
    <H3 color="gray">Button colors</H3>
    <div>
      <Button mobile>Default</Button>
      <Button mobile color="primary">
        Primary
      </Button>
      <Button mobile color="outlines">
        Outlines
      </Button>
      <Button mobile color="secondary">
        Secondary
      </Button>
      <Button mobile disabled>
        Disabled
      </Button>
      <Button mobile color="white">
        White
      </Button>
      <Button mobile color="green">
        Green
      </Button>
      <Button mobile color="red">
        Red
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
      <Button mobile size="huge">
        Button Huge
      </Button>
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
