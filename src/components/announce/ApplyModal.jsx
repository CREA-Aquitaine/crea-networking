import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Input,
  Row,
  Col,
  Label,
} from 'reactstrap';
import PropTypes from 'prop-types';
import Axios from 'axios';

import styles from './ApplyModale.module.css';

const host = process.env.REACT_APP_HOST;

function ApplyModal({ infosAnnounce, userInfos, token, getInfosAnnounce }) {
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [send, setSend] = useState(false);
  const [error, setError] = useState('');

  const toggle = () => setModal(!modal);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      Axios.post(
        `${host}/api/v1/replies/apply`,
        {
          title,
          comment,
          PostId: infosAnnounce[0].id,
          UserId: userInfos.id,
          userPostId: infosAnnounce[0].UserId,
          titlePost: infosAnnounce[0].title,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSend(true);
      return getInfosAnnounce();
    } catch (err) {
      setError(err);
      return error;
    }
  };
  return (
    <>
      <Button className="button" onClick={toggle}>
        Répondre à l&apos;annonce
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <Form onSubmit={handleSubmit}>
          <ModalHeader toggle={toggle}>Répondre à l&apos;annonce</ModalHeader>
          <ModalBody>
            <Row>
              <Col xs="3" className={styles.inputTitle}>
                <Label for="exampleFile">Sujet</Label>
              </Col>
              <Col>
                <Input
                  type="text"
                  name="title"
                  id="exampleFile"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col xs="3">
                <Label for="exampleFile">Votre message</Label>
              </Col>
              <Col>
                <Input
                  type="textarea"
                  name="file"
                  id="exampleFile"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button className="button" type="submit">
              Répondre à l&apos;annonce
            </Button>
            <Button className="button" onClick={toggle}>
              Annuler
            </Button>
          </ModalFooter>
          {send ? <p>Votre réponse a bien été envoyée.</p> : ''}
          {error ? (
            <p>
              Une erreur s&apos;est produite lors de l&apos;envoie de votre
              réponse.
            </p>
          ) : (
            ''
          )}
        </Form>
      </Modal>
    </>
  );
}
const mapStateToProps = (state) => ({
  userInfos: state.authenticated.userInfos,
  token: state.authenticated.token,
});

ApplyModal.propTypes = {
  userInfos: PropTypes.string.isRequired,
  infosAnnounce: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  getInfosAnnounce: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(ApplyModal);
