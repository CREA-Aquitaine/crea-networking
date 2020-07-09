import React, { useState } from 'react';
import { Button, Modal, ModalBody, Row, Col, Input, Label } from 'reactstrap';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { connect } from 'react-redux';

import styles from './Partner.module.css';
import star from './images/star.svg';
import starYellow from './images/starYellow.svg';

const host = process.env.REACT_APP_HOST;

function PartnerModal({
  id,
  isfavorite,
  labelPartner,
  urlPartner,
  descriptionPartner,
  token,
  getPartners,
}) {
  const [modal, setModal] = useState(false);
  const [label, setLabel] = useState({ labelPartner });
  const [description, setDescription] = useState({ descriptionPartner });
  const [logo, setImgPartner] = useState('');
  const [favorite, setFavorite] = useState({ isfavorite });
  const [url, setUrl] = useState({ urlPartner });
  const [errorDelete, setErrorDelete] = useState(false);
  const [errorPut, setErrorPut] = useState('');

  const toggle = () => setModal(!modal);

  const handleLabel = (e) => {
    setLabel(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleImgPartner = (e) => {
    setImgPartner(e.target.value);
  };

  const handleUrl = (e) => {
    setUrl(e.target.value);
  };

  const putPartner = async () => {
    try {
      await Axios.put(
        `${host}/api/v1/partners/${id}`,
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
      setModal(!modal);
      getPartners();
    } catch (err) {
      setErrorPut(err);
    }
  };
  const deletePartner = async () => {
    try {
      await Axios.delete(`${host}/api/v1/partners/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setModal(!modal);
      getPartners();
    } catch (err) {
      setErrorDelete(err);
    }
  };

  return (
    <div>
      <Button className="button" onClick={toggle}>
        Modifier
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
          <h5 className={styles.title}>MODIFICATION DU PARTENAIRE</h5>
          <p className={styles.subtitle}>
            <i>
              Modifiez votre partenaire et cliquez sur valider pour
              l&apos;enregistrer
            </i>
          </p>
          {errorDelete ? (
            <p> Il y a eu une erreur lors de la suppression.</p>
          ) : (
            ''
          )}
          {errorPut ? <p>Il y a eu une erreur lors de la modification.</p> : ''}
          <Row>
            <Col xs="1">
              {favorite === 1 ? (
                <div
                  onClick={() => setFavorite(0)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={() => setFavorite(0)}
                >
                  <img className={styles.star} src={starYellow} alt="étoile" />
                </div>
              ) : (
                <div
                  onClick={() => setFavorite(1)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={() => setFavorite(1)}
                >
                  <img className={styles.star} src={star} alt="étoile" />
                </div>
              )}
            </Col>
            <Col>
              Cliquer pour que ce partenaire deviennent un des partenaires
              favoris affichés en bas de page d&apos;accueil.
            </Col>
          </Row>

          <Input
            className={styles.input}
            type="text"
            placeholder={labelPartner}
            onChange={handleLabel}
          />
          <Input
            className={styles.input}
            type="textarea"
            placeholder={descriptionPartner}
            onChange={handleDescription}
          />
          <Input
            className={styles.input}
            type="text"
            placeholder={urlPartner}
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
                value={logo}
                onChange={handleImgPartner}
              />
            </Col>
          </Row>
          <Row className="mt-5">
            <Col xs="3">
              <Button className="button" onClick={deletePartner}>
                Supprimer
              </Button>
            </Col>
            <Col xs={{ size: 2, offset: 5 }}>
              <Button className={styles.buttonDropdown} onClick={toggle}>
                Annuler
              </Button>
            </Col>
            <Col xs="2">
              <Button className="button" type="submit" onClick={putPartner}>
                Valider
              </Button>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => ({
  token: state.authenticated.token,
});

PartnerModal.propTypes = {
  id: PropTypes.string.isRequired,
  isfavorite: PropTypes.string.isRequired,
  labelPartner: PropTypes.string.isRequired,
  descriptionPartner: PropTypes.string.isRequired,
  urlPartner: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  getPartners: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(PartnerModal);
