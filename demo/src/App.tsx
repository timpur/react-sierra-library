import { MDXProvider } from "@mdx-js/tag";
import React, { Component } from "react";

// UI
import Button from "sierra-library-react/components/Button";
import { Container } from "sierra-library-react/components/Common";
import { H1, H2, H3, H4 } from "sierra-library-react/components/Headings";
import Text from "sierra-library-react/components/Text";
import Code from "./components/Code";

// Sections
import Buttons from "./sections/Buttons.mdx";

// Make Components Global
Object.assign(window, {
  Button,
  Code,
  H1,
  H2,
  H3,
  H4,
  Text,
});

// Mark Down Components
const components = {
  code: Code,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: Text,
};

const App = () => (
  <MDXProvider components={components}>
    <Container>
      <Buttons />
    </Container>
  </MDXProvider>
);

export default App;
