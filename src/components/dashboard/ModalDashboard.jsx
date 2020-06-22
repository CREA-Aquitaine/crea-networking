import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
} from 'reactstrap';
import pen from '../image/pen.png';

import styles from './ModalDashboard.module.css';

function ModalDashboard() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleClick = () => {
    return 'click here to change your datas';
  };
  return (
    <>
      <div onClick={toggle} role="button" tabIndex={0} onKeyDown={handleClick}>
        <img src={pen} alt="stylo" className={styles.pen} />
      </div>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} className={styles.header}>
          <h3>Vos informations</h3>
        </ModalHeader>
        <ModalBody>
          <h4>Informations entreprise</h4>
          <Row>
            <Col>
              <FormGroup>
                <Label for="entreprise">Entreprise</Label>
                <Input type="text" name="entreprise" id="entreprise" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="localisation">Localisation</Label>
                <Input type="text" name="localisation" id="localisation" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label for="siret">N° de siret</Label>
                <Input type="text" name="siret" id="siret" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="activity">Secteur d&apos;activité</Label>
                <Input type="text" name="activity" id="activity" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs="8" sm="8">
              <FormGroup>
                <Label for="logo">Logo</Label>
                <Input type="text" name="logo" id="logo" />
              </FormGroup>
            </Col>
            <Col className={styles.parcourir}>
              <Button>Parcourir...</Button>
            </Col>
          </Row>
          <h4>Contact entreprise</h4>
          <Row>
            <Col>
              <FormGroup>
                <Label for="name">Nom</Label>
                <Input type="text" name="name" id="name" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="firstname">Prénom</Label>
                <Input type="text" name="firstname" id="firstname" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="poste">Qualification</Label>
                <Input type="text" name="poste" id="poste" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label for="phone">Téléphone</Label>
                <Input type="text" name="phone" id="phone" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="phone2">Téléphone 2</Label>
                <Input type="text" name="phone2" id="phone2" />
              </FormGroup>
            </Col>
          </Row>
          <Button className="button">Supprimer le compte</Button>
        </ModalBody>
        <ModalFooter>
          <Button className="button" onClick={toggle}>
            Valider
          </Button>
          <Button className="button" onClick={toggle}>
            Annuler
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default ModalDashboard;
