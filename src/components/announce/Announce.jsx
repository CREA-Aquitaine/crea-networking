import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { connect } from 'react-redux';
import styles from './Announce.module.css';
import ApplyModal from './ApplyModal';

function Announce({ token }) {
  const [infosAnnounce, setInfosAnnounce] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setisLoading] = useState(true);
  const { id } = useParams();

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
        <p>loading...</p>
      ) : (
        <Container className={styles.global}>
          {error ? <p>There is an error</p> : ''}
          <Row className={styles.top}>
            <Col sm={{ size: 4 }} className={styles.topleft}>
              <p>{`Ville: ${infosAnnounce[0].localisation}`}</p>
              <p>{`Secteur d'activité: ${infosAnnounce[0].JobCategory.labelFr} `}</p>
              <p>{`Type d'annonce:  ${infosAnnounce[0].TypePost.labelFr} `}</p>
            </Col>
            <Col className={styles.topright}>
              <h3>{infosAnnounce[0].title}</h3>
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
              <Link to="/listAnnonce">
                <button type="button">Retour</button>
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
};

export default connect(mapStateToProps)(Announce);
