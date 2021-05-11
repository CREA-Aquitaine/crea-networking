import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Container,
  Row,
  Col,
} from 'reactstrap';
import { withNamespaces } from 'react-i18next';
import PropTypes from 'prop-types';

import styles from './Contact.module.css';

const host = process.env.REACT_APP_HOST;

function Contact({ t }) {
  const [lastname, setLastName] = useState('');
  const [firstname, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [textarea, setTextArea] = useState('');
  const [error, setError] = useState(false);
  const [currentUser] = useState(() =>
    JSON.parse(sessionStorage.getItem('user'))
  );

  useEffect(() => {
    if (currentUser) {
      setEmail(currentUser.email);
      setFirstName(currentUser.firstName);
      setLastName(currentUser.lastName);
    }
  }, []);

  const setToastSuccess = () => {
    toast.success('Votre question a bien été publiée.', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const setToastError = () => {
    toast.error(t('erreurReessaye'), {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const setToastInput = () => {
    toast.info(t('renseignerChamps'), {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleChange = (e) => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSubmit = {
      lastname,
      firstname,
      email,
      text,
      textarea,
    };

    try {
      if (lastname && firstname && email && text && textarea) {
        await axios.post(`${host}/api/v1/sendMail`, dataToSubmit);
        setToastSuccess();
        setEmail('');
        setFirstName('');
        setLastName('');
        setText('');
        setTextArea('');
      } else {
        setToastInput();
      }
    } catch (err) {
      setToastError();
      setError(err);
    }
  };

  return (
    <>
      <Container className={styles.container}>
        <h2>{t('contactezNous')}</h2>
        {error ? '' : ''}
        <Form onSubmit={handleSubmit} className={styles.form}>
          <FormGroup>
            <Row className="mb-2 justify-content-center">
              <Col xs="10" sm="6">
                <Input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder={t('prenom')}
                  value={firstname}
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xs="10" sm="6">
                <Input
                  type="lastname"
                  name="lastname"
                  id="lastname"
                  placeholder={t('nom')}
                  value={lastname}
                  onChange={handleChange}
                />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row className="justify-content-center">
              <Col xs="10" sm="6">
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Votre email"
                  value={email}
                  onChange={handleChange}
                />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row className="justify-content-center">
              <Col xs="10" sm="6">
                <Input
                  type="text"
                  name="subject"
                  id="text"
                  placeholder="Sujet de la demande"
                  value={text}
                  onChange={handleChange}
                />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row className="justify-content-center">
              <Col className="textarea" xs="10" sm="6">
                <Input
                  type="textarea"
                  name="text"
                  id="textarea"
                  placeholder="Votre demande"
                  value={textarea}
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <Row className="justify-content-center mt-4">
              <Col xs="12">
                <Button type="submit" className="button">
                  {t('envoyer')}
                </Button>
              </Col>
            </Row>
          </FormGroup>
        </Form>
      </Container>
    </>
  );
}

Contact.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withNamespaces()(Contact);
