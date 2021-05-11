import React, { useState } from 'react';
import { Row, Col, Input, Form, Label, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { compose } from 'redux';
import { withNamespaces } from 'react-i18next';

import { AiOutlineStar } from 'react-icons/ai';
import styles from './Partner.module.css';
import starYellow from './images/starYellow.svg';

const host = process.env.REACT_APP_HOST;
const imgurToken = process.env.REACT_APP_IMGUR_TOKEN;

function PartnersPost({ getPartners, token, t }) {
  const [label, setLabel] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [logo, setLogo] = useState('');
  const [favorite, setFavorite] = useState(false);
  const [error, setError] = useState('');

  const [created, setCreated] = useState(false);

  const handleLabel = (e) => {
    setLabel(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleUrl = (e) => {
    setUrl(e.target.value);
  };

  const handleLogo = (e) => {
    setLogo(e.target.files[0]);
  };

  const handleStar = () => {
    setFavorite(!favorite);
  };

  const setToastSuccess = () => {
    toast.success('Votre partenaire a bien été ajouté.', {
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
    toast.info('Veuillez renseigner tous les champs et sélectionner un logo', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const postNewImage = () => {
    if (!label || !description || !url || !logo) {
      setToastInput();
    } else {
      Axios.post('https://api.imgur.com/3/image', logo, {
        headers: {
          Authorization: `Client-ID ${imgurToken}`,
        },
      })
        .then((res) => {
          // setLogo(res.data.data.link);
          return Axios.post(
            `${host}/api/v1/partners`,
            {
              label,
              description,
              url,
              logo: res.data.data.link,
              favorite,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
        })
        .then(() => setCreated(true))
        .then(() => getPartners())
        .then(() => setToastSuccess())
        .then(() => setTimeout(() => setCreated(false), 2000))
        .catch((err) => {
          setToastError();
          setError(err);
        });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postNewImage();
    setLabel('');
    setDescription('');
    setUrl('');
    setLogo('');
    setFavorite('');
  };

  return (
    <Form fluid className={styles.addQR} onSubmit={handleSubmit}>
      <Input
        className={styles.inputQR}
        type="text"
        name="search"
        id="search"
        value={label}
        placeholder="Ajouter le nom de votre partenaire"
        onChange={handleLabel}
      />
      <Input
        className={styles.inputQR}
        type="text"
        name="search"
        id="search"
        value={description}
        placeholder="Texte descriptif"
        onChange={handleDescription}
      />
      <Input
        className={styles.inputQR}
        type="text"
        name="search"
        id="search"
        value={url}
        placeholder="URL du site du partenaire"
        onChange={handleUrl}
      />
      <Row>
        <Col md="3" xs="5" className={styles.logo}>
          <Label for="exampleFile">Logo du partenaire</Label>
        </Col>
        <Col md="3" xs="5">
          <Input
            type="file"
            files={logo}
            name="logo"
            id="logoFile"
            onChange={handleLogo}
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs="1">
          {favorite ? (
            <div
              onClick={handleStar}
              role="button"
              tabIndex={0}
              onKeyDown={handleStar}
            >
              <img className={styles.star} src={starYellow} alt="étoile" />
            </div>
          ) : (
            <div
              onClick={handleStar}
              role="button"
              tabIndex={0}
              onKeyDown={handleStar}
            >
              <AiOutlineStar />
            </div>
          )}
        </Col>
        <Col xs="8">
          Cliquez sur l&apos;étoile pour ajouter ce partenaire à vos partenaires
          favoris.
        </Col>
      </Row>
      <Row className="justify-content-end">
        <Col md="2" xs="4">
          <Button className="button" type="submit">
            Ajouter
          </Button>
        </Col>
      </Row>
      {created ? '' : ''}
      {error ? '' : ''}
    </Form>
  );
}

const mapStateToProps = (state) => ({
  token: state.authenticated.token,
});

PartnersPost.propTypes = {
  getPartners: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
};

export default compose(
  connect(mapStateToProps),
  withNamespaces()
)(PartnersPost);
