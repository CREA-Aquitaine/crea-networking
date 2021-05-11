import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { withNamespaces } from 'react-i18next';
import ReactHtmlParser from 'react-html-parser';
import { connect } from 'react-redux';
import styles from './Announce.module.css';
import ApplyModal from './ApplyModal';

function Announce({ token, t }) {
  const [infosAnnounce, setInfosAnnounce] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setisLoading] = useState(true);
  const { id } = useParams();
  const [currentUser] = useState(() =>
    JSON.parse(sessionStorage.getItem('user'))
  );

  const getInfosAnnounce = async () => {
    const host = process.env.REACT_APP_HOST;
    try {
      const res = await Axios.get(`${host}/api/v1/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setInfosAnnounce(res.data);
      setisLoading(false);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    getInfosAnnounce();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>{t('chargement')}...</p>
      ) : (
        <Container className={`p-5 ${styles.global}`}>
          {error ? <p>{t('erreurVu')}</p> : ''}
          <Row className={styles.top}>
            <Col sm={{ size: 4 }} className={styles.topleft}>
              <p>
                <b>{t('ville')} : </b>
                {`${infosAnnounce[0].localisation}`}
              </p>
              <p>
                <b>{t('typeAnnonce')} : </b>
                {`${infosAnnounce[0].JobCategory.labelFr} `}
              </p>
              <p>
                <b>{t('secteurActivite')} : </b>
                {`${infosAnnounce[0].TypePost.labelFr} `}
              </p>
            </Col>
            <Col className={styles.topright}>
              <h2>{infosAnnounce[0].title}</h2>
            </Col>
          </Row>
          <Row className={styles.bottom}>
            {ReactHtmlParser(infosAnnounce[0].content)}
          </Row>
          <Row className={styles.btn}>
            <Col>
              <ApplyModal
                infosAnnounce={infosAnnounce}
                getInfosAnnounce={getInfosAnnounce}
              />
            </Col>
            <Col>
              <Link
                to={
                  currentUser.Role.label === 'ADMIN'
                    ? '/announces'
                    : '/listAnnonce'
                }
              >
                <button type="button">{t('retour')}</button>
              </Link>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  token: state.authenticated.token,
});

Announce.propTypes = {
  token: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
};

export default compose(connect(mapStateToProps), withNamespaces())(Announce);
