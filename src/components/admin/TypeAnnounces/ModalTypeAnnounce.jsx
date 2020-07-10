import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Form,
  Label,
  Col,
  Row,
} from 'reactstrap';
import PropTypes from 'prop-types';

import styles from './TypeAnnounce.module.css';


const host = process.env.REACT_APP_HOST;

function ModalType({ className, getType, token, id }) {
  const [modal, setModal] = useState(false);
  const [labelFr, setLabelFr] = useState('');
  const [labelEs, setLabelEs] = useState('');
  const [labelEus, setLabelEus] = useState('');
  const [errorPut, setErrorPut] = useState('');
  const [errorDelete, setErrorDelete] = useState(false);

  const putType = async () => {
    try {
      await Axios.put(
        `${host}/api/v1/postTypes/${id}`,
        {
          labelFr,
          labelEs,
          labelEus,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setModal(!modal);
      getType();
    } catch (err) {
      setErrorPut(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    putType();
  };

  const deleteType = async () => {
    try {
      await Axios.delete(`${host}/api/v1/postTypes/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      getType();
    } catch (err) {
      setErrorDelete(err);
    }
  };

  const toggle = () => setModal(!modal);
  return (
    <div>
      {errorDelete ? <p>La catégorie a bien été supprimé</p> : ''}
      {errorPut ? <p>Il y a eu une erreur lors de la modification.</p> : ''}
      <Button color="danger" onClick={toggle}>
        Modifier/supprimer
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>

        <ModalHeader toggle={toggle}>
          Modification ou suppression des données
        </ModalHeader>
        <Row>
          <Col xs={6}>
            <ModalBody>
              Modification du type d&apos;annonce
              <Form onSubmit={handleSubmit}>
                <Label for="type" />
                <Input
                  className={`${styles.input}`}
                  type="text"
                  value={labelFr}
                  placeholder="Types d'annonce"
                  onChange={(e) => setLabelFr(e.target.value)}
                />
                <Label for="type" />
                <Input
                  className={`${styles.input} mt-2`}
                  type="text"
                  placeholder="Iragarki motak"
                  value={labelEus}
                  onChange={(e) => setLabelEus(e.target.value)}
                />
                <Label for="type" />
                <Input
                  className={`${styles.input} mt-2`}
                  type="text"
                  value={labelEs}
                  placeholder="Tipos de anuncios"
                  onChange={(e) => setLabelEs(e.target.value)}
                />
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button
                className="md-auto mr-5 ml-5"
                color="warning"
                onClick={toggle}
              >
                Non
              </Button>{' '}
              <Button
                className="md-auto mr-5 ml-5"
                color="danger"
                onClick={putType}
              >
                Oui
              </Button>
            </ModalFooter>
          </Col>
          <Col xs={6}>
            <ModalBody>
              Souhaitez vous supprimer ce type d&apos;annonce ?
            </ModalBody>
            <ModalFooter>
              <Button
                className="md-auto ml-5 mr-5"
                color="warning"
                onClick={toggle}
              >
                {' '}
                Non
              </Button>{' '}
              <Button
                className="md-auto ml-5 mr-5"
                color="danger"
                onClick={deleteType}
              >
                {' '}
                Oui
              </Button>
            </ModalFooter>
          </Col>
        </Row>

      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => ({
  token: state.authenticated.token,
});
ModalType.propTypes = {
  token: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,

  id: PropTypes.string.isRequired,
  getType: PropTypes.string.isRequired,

};

export default ModalType;
