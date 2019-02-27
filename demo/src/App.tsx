import { MDXProvider } from "@mdx-js/tag";
import React, { Component } from "react";

// Components
import Code from "./components/Code";

// UI
import Button from "react-sierra-library/components/Button";
import { Container } from "react-sierra-library/components/Common";
import Field from "react-sierra-library/components/Field";
import { H1, H2, H3, H4 } from "react-sierra-library/components/Headings";
import Input from "react-sierra-library/components/Input";
import Select from "react-sierra-library/components/Select";
import Text from "react-sierra-library/components/Text";
import Textarea from "react-sierra-library/components/Textarea";

// Sections
import Buttons from "./sections/Buttons.mdx";
import Forms from "./sections/Forms.mdx";

// Make Components Global
Object.assign(window, {
  Button,
  Code,
  H1,
  H2,
  H3,
  H4,
  Text,
  Input,
  Field,
  Select,
  Textarea,
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
      <Forms />
    </Container>
  </MDXProvider>
);

export default App;
