import React, { useState } from 'react';
import { Button, Modal, ModalBody, Row, Col, Input, Label } from 'reactstrap';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';

import styles from './Partner.module.css';
import star from './images/star.svg';
import starYellow from './images/starYellow.svg';

const host = process.env.REACT_APP_HOST;
const imgurToken = process.env.REACT_APP_IMGUR_TOKEN;

function PartnerModal({
  id,
  isfavorite,
  labelPartner,
  urlPartner,
  descriptionPartner,
  token,
  getPartners,
  image,
}) {
  const [modal, setModal] = useState(false);
  const [label, setLabel] = useState(labelPartner);
  const [description, setDescription] = useState(descriptionPartner);
  const [logo, setImgPartner] = useState(image);
  const [favorite, setFavorite] = useState(isfavorite);
  const [url, setUrl] = useState(urlPartner);
  const [errorDelete, setErrorDelete] = useState(false);
  const [errorPut, setErrorPut] = useState('');
  const history = useHistory();

  const toggle = () => setModal(!modal);

  const handleLabel = (e) => {
    setLabel(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleImgPartner = (e) => {
    setImgPartner(e.target.files[0]);
  };

  const handleUrl = (e) => {
    setUrl(e.target.value);
  };

  const setToastSuccess = () => {
    toast.success('Votre partenaire a bien été modifié.', {
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

  const setToastSuccessDel = () => {
    toast.success('Votre partenaire a bien été supprimé.', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const setToastErrorDel = () => {
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

  const putPartner = async () => {
    try {
      if (label && description && url && logo) {
        const res = await Axios.post('https://api.imgur.com/3/image', logo, {
          headers: {
            Authorization: `Client-ID ${imgurToken}`,
          },
        });
        await Axios.put(
          `${host}/api/v1/partners/${id}`,
          {
            label,
            description,
            url,
            favorite,
            logo: res.data.data.link,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setModal(!modal);
        getPartners();
        setToastSuccess();
      } else {
        setToastInput();
      }
    } catch (err) {
      setToastError();
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
      history.push('/partners');
      getPartners();
      setToastSuccessDel();
    } catch (err) {
      setErrorDelete(err);
      setToastErrorDel();
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
              {favorite === '1' ? (
                <div
                  onClick={() => setFavorite('0')}
                  role="button"
                  tabIndex={0}
                  onKeyDown={() => setFavorite('0')}
                >
                  <img className={styles.star} src={starYellow} alt="étoile" />
                </div>
              ) : (
                <div
                  onClick={() => setFavorite('1')}
                  role="button"
                  tabIndex={0}
                  onKeyDown={() => setFavorite('1')}
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
            value={label}
            onChange={handleLabel}
          />
          <Input
            className={styles.input}
            type="textarea"
            value={description}
            onChange={handleDescription}
          />
          <Input
            className={styles.input}
            type="text"
            value={url}
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
                files={logo}
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
  getPartners: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(PartnerModal);
