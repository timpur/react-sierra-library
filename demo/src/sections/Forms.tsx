import React, { StatelessComponent } from "react";

import { Section } from "sierra-library-react/components/Common";
import Field from "sierra-library-react/components/Field";
import { Col, Row } from "sierra-library-react/components/FlexBoxGrid";
import { H1, H3 } from "sierra-library-react/components/Headings";
import Input from "sierra-library-react/components/Input";
import Select from "sierra-library-react/components/Select";
import Textarea from "sierra-library-react/components/Textarea";

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
];

const Forms: StatelessComponent = () => (
  <Section>
    <H1>Forms</H1>
    <Row>
      <Col xs={12} md={6}>
        <Input id="name" label="Name" placeholder="Name" />
      </Col>
      <Col xs={12} md={6}>
        <Field error="$error message">
          <Input id="name_error" label="Name" placeholder="Name" />
        </Field>
      </Col>
    </Row>
    <Row>
      <Col xs={12} md={6}>
        <Input id="address" label="Address" placeholder="Address" full />
      </Col>
      <Col xs={12} md={6}>
        <Field error="$error message">
          <Input
            id="address_error"
            label="Address"
            placeholder="Address"
            full
          />
        </Field>
      </Col>
    </Row>
    <Row>
      <Col xs={12} md={6}>
        <Select
          id="country"
          label="Country"
          placeholder="Country"
          options={countries}
        />
      </Col>
      <Col xs={12} md={6}>
        <Field error="$error message">
          <Select
            id="country_error"
            label="Country"
            placeholder="Country"
            options={countries}
          />
        </Field>
      </Col>
    </Row>
    <Row>
      <Col xs={12} md={6}>
        <Textarea id="name" label="Name" placeholder="Name" />
      </Col>
      <Col xs={12} md={6}>
        <Field error="$error message">
          <Input id="name_error" label="Name" placeholder="Name" />
        </Field>
      </Col>
    </Row>
  </Section>
);

export default Forms;
