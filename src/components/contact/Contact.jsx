import React, { useState } from 'react';
import axios from 'axios';
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
// import ToastContact from './Toast';

function Contact() {
  const [lastname, setLastName] = useState('');
  const [firstname, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [textarea, setTextArea] = useState('');

  const handleClick = (e) => {
    e.preventDefault();

    if (e.target.id === 'lastname') {
      setLastName(e.target.value);
    } else if (e.target.id === 'firstname') {
      setFirstName(e.target.value);
    } else if (e.target.id === 'email') {
      setEmail(e.target.value);
    } else if (e.target.id === 'text') {
      setText(e.target.value);
    } else if (e.target.id === 'textarea') {
      setTextArea(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToSubmit = {
      lastname,
      firstname,
      email,
      text,
      textarea,
    };
    axios.post('/api/sendMail', dataToSubmit);
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
                  value={lastname}
                  onChange={handleClick}
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
                  value={firstname}
                  onChange={handleClick}
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
                  placeholder="jean.durand@wcs.com"
                  value={email}
                  onChange={handleClick}
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
                  value={text}
                  onChange={handleClick}
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
                <Input
                  type="textarea"
                  name="text"
                  id="exampleText"
                  value={textarea}
                  onChange={handleClick}
                />
              </Col>
            </Row>
          </FormGroup>
          <Row>
            <Col xs={{ size: 2, offset: 8 }} className="mb-5">
              <Button onClick={handleSubmit} className="button">
                Envoyer
              </Button>
            </Col>
            {/* {message ? <ToastContact /> : ''} */}
          </Row>
        </Form>
      </Container>
    </>
  );
}

export default Contact;

// tuto used to setup nodemailer https://www.youtube.com/watch?v=04zqBhQx7xU
