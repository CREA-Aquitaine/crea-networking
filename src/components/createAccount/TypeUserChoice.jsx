import React, { useState } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import CollapseSchool from './CollapseSchool';
import CollapseCompany from './CollapseCompany';
import CollapseSeeker from './CollapseSeeker';

import styles from './CreateAccount.module.css';

function TypeUserChoice() {
  const [isOpenCompany, setIsOpenCompany] = useState(false);
  const [isOpenSeeker, setIsOpenSeeker] = useState(false);
  const [isOpenSchool, setIsOpenScool] = useState(false);
  const toggleCompany = () => {
    setIsOpenCompany(!isOpenCompany);
    setIsOpenSeeker(false);
    setIsOpenScool(false);
  };
  const toggleSeeker = () => {
    setIsOpenSeeker(!isOpenSeeker);
    setIsOpenScool(false);
    setIsOpenCompany(false);
  };
  const toggleSchool = () => {
    setIsOpenScool(!isOpenSchool);
    setIsOpenCompany(false);
    setIsOpenSeeker(false);
  };

  return (
    <Form>
      <FormGroup tag="fieldset">
        <h3>Vous êtes ...</h3>
        <FormGroup check className={styles.formgroup}>
          <Label check className={styles.label}>
            <Input type="radio" name="radio1" onClick={toggleCompany} />
            Une entreprise ou une association
          </Label>
        </FormGroup>
        <FormGroup check className={styles.formgroup}>
          <Label check className={styles.label}>
            <Input type="radio" name="radio1" onClick={toggleSeeker} /> un
            demandeur d&apos;emploi
          </Label>
        </FormGroup>
        <FormGroup check className={styles.formgroupSchool}>
          <Label check className={styles.label}>
            <Input type="radio" name="radio1" onClick={toggleSchool} /> Une
            école ou une université
          </Label>
        </FormGroup>
      </FormGroup>
      <CollapseCompany isOpen={isOpenCompany} />
      <CollapseSchool isOpen={isOpenSchool} />
      <CollapseSeeker isOpen={isOpenSeeker} />
    </Form>
  );
}

export default TypeUserChoice;
