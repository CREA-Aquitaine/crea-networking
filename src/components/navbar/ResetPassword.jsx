import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
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

import styles from '../contact/Contact.module.css';

const host = process.env.REACT_APP_HOST;

const ResetPassword = () => {
  const location = useLocation().search;
  const history = useHistory();
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [tokenValue, setTokenValue] = useState('');
  const [error, setError] = useState(false);

  const setToastSuccess = () => {
    toast.success('Votre mot de passe a été modifié', {
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
    toast.error('Une erreur est survenue, veuillez réessayer.', {
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
    toast.info("Renseignez tous les champs s'il vous plait", {
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

    if (e.target.id === 'password1') {
      setPassword1(e.target.value);
    } else if (e.target.id === 'password2') {
      setPassword2(e.target.value);
    }
  };

  useEffect(() => {
    const email = new URLSearchParams(location).get('email');
    const token = new URLSearchParams(location).get('token');
    setEmailValue(email);
    setTokenValue(token);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSubmit = { password1, password2, emailValue, tokenValue };

    try {
      if (password1 && password2) {
        await axios.post(`${host}/api/v1/auth/resetPassword`, dataToSubmit);
        setToastSuccess();
        setPassword1('');
        setPassword2('');
        history.push('/dashboard');
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
        <h2>Réinitialiser le mot de passe</h2>
        <p>Entrez votre nouveau mot de passe ci-dessous.</p>
        {error ? '' : ''}
        <Form onSubmit={handleSubmit} className={styles.form}>
          <FormGroup>
            <Row className="mb-2 justify-content-center">
              <Col xs="10" sm="6">
                <Input
                  type="password"
                  name="password1"
                  id="password1"
                  placeholder="Nouveau mot de passe"
                  value={password1}
                  onChange={handleChange}
                />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row className="justify-content-center">
              <Col xs="10" sm="6">
                <Input
                  type="password"
                  name="password2"
                  id="password2"
                  placeholder="Confirmer le mot de passe"
                  value={password2}
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <Row className="justify-content-center mt-4">
              <Col xs="12">
                <Button type="submit" className="button">
                  Réinitialiser
                </Button>
              </Col>
            </Row>
          </FormGroup>
        </Form>
      </Container>
    </>
  );
};

export default ResetPassword;
