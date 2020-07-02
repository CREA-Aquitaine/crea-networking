import React from 'react';
import { Collapse, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

import FormGroupCollapse from './FormGroupCollapse';
import styles from './CreateAccount.module.css';

function CollapseSeeker({ isOpen }) {
  return (
    <Collapse isOpen={isOpen}>
      <FormGroupCollapse
        type="text"
        name="firstname"
        id="firstname"
        placeholder="Jean"
        title="Votre nom*"
      />
      <FormGroupCollapse
        type="text"
        name="lastname"
        id="lastname"
        placeholder="Dupont"
        title="Votre prénom*"
      />
      <FormGroupCollapse
        type="email"
        name="email"
        id="email"
        placeholder="jean.dupont@world.com"
        title="Email*"
      />
      <FormGroupCollapse
        type="password"
        name="password"
        id="password"
        placeholder="*******"
        title="Mot de passe*"
      />
      <FormGroupCollapse
        type="password"
        name="password"
        id="password"
        placeholder="*******"
        title="Confirmez le mot de passe*"
      />
      <FormGroupCollapse
        type="text"
        name="phone"
        id="phone"
        placeholder="0102030405"
        title="Téléphone*"
      />
      <FormGroupCollapse
        type="text"
        name="phone2"
        id="phone2"
        placeholder="0102030405"
        title="Téléphone 2"
      />
      <FormGroup>
        <Row>
          <Col xs="2">
            <Label for="exampleFile">CV</Label>
          </Col>
          <Col>
            <Input type="file" name="file" id="exampleFile" />
          </Col>
        </Row>
      </FormGroup>
      <p className={styles.champs}> Les champs * sont obligatoires.</p>
      <Row>
        <Col xs={{ size: 2, offset: 5 }}>
          <button type="button" className={`${styles.buttonValidate} button`}>
            Valider
          </button>
        </Col>
      </Row>
    </Collapse>
  );
}

CollapseSeeker.propTypes = { isOpen: PropTypes.string.isRequired };

export default CollapseSeeker;
