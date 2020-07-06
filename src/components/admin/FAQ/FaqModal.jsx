import React, { useState } from 'react';
import { Button, Modal, ModalBody, Row, Col, Input } from 'reactstrap';
import styles from './Faq_List.module.css';

function FaqModal() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button className={styles.buttonDropdown} onClick={toggle}>
        Modifier
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
          <h5 className={styles.title}>MODIFICATION DE LA QUESTION/REPONSE</h5>
          <p className={styles.subtitle}>
            <i>
              Modifier votre question/réponse et cliquez sur valider pour
              l&apos;enregistrer
            </i>
          </p>
          <Input
            className={styles.question}
            type="textarea"
            value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id
            est ac lorem porttitor eleifend. Praesent rutrum molestie magna.
            Curabitur ac nisl ut massa pharetra sodales ?"
          />
          <Input
            type="textarea"
            className={styles.reponse}
            value="Praesent blandit orci a interdum mollis. Vestibulum congue tincidunt
            mauris eu accumsan. Aliquam feugiat quam justo, vitae maximus arcu
            molestie sed. Curabitur sed est sed ante pulvinar vestibulum vitae
            ut nunc. Donec hendrerit mi nec sem bibendum tincidunt. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Curabitur
            venenatis tristique eleifend. Sed fringilla, erat a euismod lacinia,
            dolor risus blandit elit, in tempor erat urna volutpat risus. Sed
            mattis mollis massa vitae interdum. Etiam ac lacus lorem."
          />
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

export default FaqModal;
