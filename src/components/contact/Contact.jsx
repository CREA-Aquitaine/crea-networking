import React, { useState } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
} from 'reactstrap';

import styles from './Contact.module.css';
import ToastContact from './Toast';

function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    return setMessage(true);
  };
  return (
    <>
      <Container className={styles.container}>
        <h2>Contactez-nous</h2>
        <Form onSubmit={handleSubmit} className={styles.form}>
          <FormGroup>
            <Row className="mb-2">
              <Col xs={{ size: 2, offset: 2 }}>
                <Label for="lastname">Votre nom</Label>
              </Col>
              <Col xs="6">
                <Input
                  type="lastname"
                  name="lastname"
                  id="lastname"
                  placeholder="Dupont"
                />
              </Col>
            </Row>
            <Row>
              <Col xs={{ size: 2, offset: 2 }}>
                <Label for="firstname">Votre prénom</Label>
              </Col>
              <Col xs="6">
                <Input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="Jean"
                />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col xs={{ size: 2, offset: 2 }}>
                <Label for="exampleEmail">Votre email</Label>
              </Col>
              <Col xs="6">
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="jean.dupont@wcs.com"
                />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col xs={{ size: 2, offset: 2 }}>
                <Label for="exampleEmail">Sujet de la demande</Label>
              </Col>
              <Col xs="6">
                <Input
                  type="text"
                  name="subject"
                  id="exampleSubjet"
                  placeholder="Information sur CREA"
                />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col xs={{ size: 2, offset: 2 }}>
                <Label for="exampleText">Votre demande</Label>
              </Col>
            </Row>
            <Row>
              <Col className="textarea" xs={{ size: 8, offset: 2 }}>
                <Input type="textarea" name="text" id="exampleText" />
              </Col>
            </Row>
          </FormGroup>
          <Row>
            <Col xs={{ size: 2, offset: 8 }} className="mb-5">
              <Button className="button">Envoyer</Button>
            </Col>
            {message ? <ToastContact /> : ''}
          </Row>
        </Form>
      </Container>
    </>
  );
}

export default Contact;
