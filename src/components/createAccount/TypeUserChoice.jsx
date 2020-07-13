import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import Axios from 'axios';

import CollapseSchool from './CollapseSchool';
import CollapseCompany from './CollapseCompany';
import CollapseSeeker from './CollapseSeeker';

import styles from './CreateAccount.module.css';

const host = process.env.REACT_APP_HOST;

function TypeUserChoice() {
  const [isOpenCompany, setIsOpenCompany] = useState(false);
  const [isOpenSeeker, setIsOpenSeeker] = useState(false);
  const [isOpenSchool, setIsOpenScool] = useState(false);
  const [userTypes, setUserTypes] = useState([]);
  const [userTypeId, setUserTypeId] = useState('');
  const [userRoles, setUserRoles] = useState([]);
  const [userRole, setUserRole] = useState('');
  const user = userRoles.filter((item) => item.label === 'USER');
  const userRol = user[0] && user[0].id;
  const company = userTypes.filter((item) => item.label === 'Entreprise');
  const companyId = company[0] && company[0].id;
  const school = userTypes.filter((item) => item.label === 'Ecole');
  const schoolId = school[0] && school[0].id;
  const seeker = userTypes.filter((item) => item.label === 'Demandeur emploi');
  const seekerId = seeker[0] && seeker[0].id;

  const getUserTypes = async () => {
    try {
      const res = await Axios.get(`${host}/api/v1/userTypes`);
      return setUserTypes(res.data);
    } catch (err) {
      return err;
    }
  };

  const getRoles = async () => {
    try {
      const res = await Axios.get(`${host}/api/v1/role`);
      return setUserRoles(res.data);
    } catch (err) {
      return err;
    }
  };

  useEffect(() => {
    getUserTypes();
    getRoles();
  }, []);

  const toggleCompany = () => {
    setUserTypeId(companyId);
    setIsOpenCompany(!isOpenCompany);
    setIsOpenSeeker(false);
    setIsOpenScool(false);
    setUserRole(userRol);
  };
  const toggleSeeker = () => {
    setUserTypeId(schoolId);
    setIsOpenSeeker(!isOpenSeeker);
    setIsOpenScool(false);
    setIsOpenCompany(false);
    setUserRole(userRol);
  };
  const toggleSchool = () => {
    setUserTypeId(seekerId);
    setIsOpenScool(!isOpenSchool);
    setIsOpenCompany(false);
    setIsOpenSeeker(false);
    setUserRole(userRol);
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
            <Input type="radio" name="radio1" onClick={toggleSeeker} /> Un
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
      <CollapseCompany
        isOpen={isOpenCompany}
        userTypeId={userTypeId}
        roleId={userRole}
      />
      <CollapseSchool
        isOpen={isOpenSchool}
        userTypeId={userTypeId}
        roleId={userRole}
      />
      <CollapseSeeker
        isOpen={isOpenSeeker}
        userTypeId={userTypeId}
        roleId={userRole}
      />
    </Form>
  );
}

export default TypeUserChoice;
