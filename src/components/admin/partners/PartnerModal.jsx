import React, { useState } from 'react';
import { Button, Modal, ModalBody, Row, Col, Input, Label } from 'reactstrap';
import styles from './Partner.module.css';

function PartnerModal() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button className={styles.buttonDropdown} onClick={toggle}>
        Modifier
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
          <h5 className={styles.title}>MODIFICATION DU PARTENAIRE</h5>
          <p className={styles.subtitle}>
            <i>
              Modifier votre partenaire et cliquez sur valider pour
              l&apos;enregistrer
            </i>
          </p>
          <Row>
            <Col xs="1">
              <img
                className={styles.star}
                src="https://image.flaticon.com/icons/svg/1828/1828884.svg"
                alt="star"
              />
            </Col>
            <Col>
              Cliquer pour que ce partenaire deviennent un des partenaires
              favoris affichés en bas de page d&apos;accueil.
            </Col>
          </Row>

          <Input className={styles.input} type="text" value="Lorem ipsum" />
          <Input
            className={styles.input}
            type="textarea"
            value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id
            est ac lorem porttitor eleifend. Praesent rutrum molestie magna.
            Curabitur ac nisl ut massa pharetra sodales "
          />
          <Input className={styles.input} type="text" value="http://hello.fr" />
          <Row>
            <Col xs="3" className={styles.logo}>
              <Label for="exampleFile">Logo du partenaire</Label>
            </Col>
            <Col>
              <Input type="file" name="file" id="exampleFile" />
            </Col>
          </Row>
          <Row>
            <Col xs={{ size: 1.5, offset: 8 }}>
              <Button className={styles.buttonDropdown} onClick={toggle}>
                Annuler
              </Button>
            </Col>
            <Col xs="2">
              <Button className="button" onClick={toggle}>
                Valider
              </Button>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default PartnerModal;
