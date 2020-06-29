import React from 'react';
import { FormGroup, Label, Input, Form, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

function FormGroupCollapse({ id, name, type, placeholder, title }) {
  return (
    <Form>
      <FormGroup>
        <Row>
          <Col xs="2">
            <Label for={id}>{title}</Label>
          </Col>
          <Col>
            <Input type={type} name={name} id={id} placeholder={placeholder} />
          </Col>
        </Row>
      </FormGroup>
    </Form>
  );
}

FormGroupCollapse.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default FormGroupCollapse;
