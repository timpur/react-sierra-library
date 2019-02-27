import React, { StatelessComponent } from "react";

import { Section } from "react-sierra-library/components/Common";
import Field from "react-sierra-library/components/Field";
import { Col, Row } from "react-sierra-library/components/FlexBoxGrid";
import { H1, H3 } from "react-sierra-library/components/Headings";
import Input from "react-sierra-library/components/Input";
import Select from "react-sierra-library/components/Select";
import Textarea from "react-sierra-library/components/Textarea";

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
