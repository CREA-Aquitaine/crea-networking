import React, { useState } from 'react';
import { Row, Col, Input, Form, Label, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { connect } from 'react-redux';

import styles from './Partner.module.css';
import star from './images/star.svg';
import starYellow from './images/starYellow.svg';

function PartnersPost({ getPartners, token }) {
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
    setLogo(e.target.value);
  };

  const handleStar = () => {
    setFavorite(!favorite);
  };

  const postPartners = async () => {
    try {
      await Axios.post(
        'http://localhost:8080/api/v1/partners',
        {
          label,
          description,
          url,
          logo,
          favorite,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCreated(true);
      getPartners();
    } catch (err) {
      setError(err);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postPartners();
  };

  return (
    <Form fluid className={styles.addQR} onSubmit={handleSubmit}>
      {created ? <p>Votre partenaire a bien été ajouté.</p> : ''}
      {error ? (
        <p>Une erreur s&apos;est produite lors de la création du partenaire.</p>
      ) : (
        ''
      )}
      <Input
        className={styles.inputQR}
        type="text"
        name="search"
        id="search"
        placeholder="Ajouter le nom de votre partenaire"
        onChange={handleLabel}
      />
      <Input
        className={styles.inputQR}
        type="text"
        name="search"
        id="search"
        placeholder="Texte descriptif"
        onChange={handleDescription}
      />
      <Input
        className={styles.inputQR}
        type="text"
        name="search"
        id="search"
        placeholder="URL du site du partenaire"
        onChange={handleUrl}
      />
      <Row>
        <Col xs="3" className={styles.logo}>
          <Label for="exampleFile">Logo du partenaire</Label>
        </Col>
        <Col>
          <Input
            type="file"
            name="file"
            id="exampleFile"
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
              <img className={styles.star} src={star} alt="étoile" />
            </div>
          )}
        </Col>
        <Col xs="8">
          Cliquer sur l&apos;étoile pour que le partenaire fasse parti de vos
          partenaires favoris.
        </Col>
      </Row>
      <Row>
        <Col xs={{ size: 2, offset: 10 }}>
          <Button className="button" type="submit">
            Ajouter
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

const mapStateToProps = (state) => ({
  token: state.authenticated.token,
});

PartnersPost.propTypes = {
  getPartners: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(PartnersPost);
