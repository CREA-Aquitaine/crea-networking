import React from 'react';
import {
  Collapse,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Button,
} from 'reactstrap';
import PropTypes from 'prop-types';

import FormGroupCollapse from './FormGroupCollapse';
import styles from './CreateAccount.module.css';

function CollapseCompany({ isOpen }) {
  return (
    <Collapse isOpen={isOpen}>
      <FormGroupCollapse
        type="text"
        name="nameOrganisation"
        id="nameOrganisation"
        placeholder="SAS Jean Dupont"
        title="Nom de l'entreprise*"
      />
      <FormGroupCollapse
        type="text"
        name="siret"
        id="siret"
        placeholder="XXXXXXXXXXXXXX"
        title="Numéro de siret*"
      />
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
        placeholder="********"
        title="Mot de passe*"
      />
      <FormGroupCollapse
        type="password"
        name="password"
        id="password"
        placeholder="********"
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
        title="Téléphone"
      />
      <FormGroupCollapse
        type="text"
        name="poste"
        id="poste"
        placeholder="DRH"
        title="Poste dans l'entreprise*"
      />
      <FormGroupCollapse
        type="text"
        name="secteur"
        id="sectuer"
        placeholder="Batiment"
        title="Secteur d'activité de l'entreprise*"
      />
      <FormGroup>
        <Row>
          <Col xs="2">
            <Label for="exampleFile">Logo de l&apos;entreprise</Label>
          </Col>
          <Col>
            <Input type="file" name="file" id="exampleFile" />
          </Col>
        </Row>
      </FormGroup>
      <p className={styles.champs}>Les champs * sont obligatoires.</p>
      <Row>
        <Col xs={{ size: 2, offset: 5 }}>
          <Button className={`${styles.buttonValidate} button`}>Valider</Button>
        </Col>
      </Row>
    </Collapse>
  );
}

CollapseCompany.propTypes = { isOpen: PropTypes.string.isRequired };

export default CollapseCompany;
