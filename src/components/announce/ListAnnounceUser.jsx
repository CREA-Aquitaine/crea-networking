import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import {
  Button,
  CardText,
  CardSubtitle,
  CardTitle,
  CardBody,
  Card,
  Container,
  Input,
  Row,
  Col,
} from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { withNamespaces } from 'react-i18next';

import styles from './ListAnnounceUser.module.css';

function ListAnnounceUser({ token, t, translate }) {
  const [isLoading, setisLoading] = useState(true);
  const [annonceData, setAnnonceData] = useState([]);
  const [error, setError] = useState('');
  const [jobCatData, setjobCatData] = useState([]);
  const [TypePost, setTypePost] = useState([]);
  const [annonceFiltered, setAnnonceFiltered] = useState([]);
  const [selectJobCat, setSelectJobCat] = useState('');
  const [selectTypePost, setSelectTypePost] = useState('');

  const getAnnounces = async () => {
    const host = process.env.REACT_APP_HOST;
    try {
      const res = await Axios.get(`${host}/api/v1/posts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAnnonceData(res.data);
      setAnnonceFiltered(res.data);
    } catch (err) {
      setError(err);
    }
  };

  const getJobCatData = async () => {
    const host = process.env.REACT_APP_HOST;
    try {
      const res = await Axios.get(`${host}/api/v1/jobCategories`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setjobCatData(res.data);
    } catch (err) {
      setError(err);
    }
  };

  const getTypePost = async () => {
    const host = process.env.REACT_APP_HOST;
    try {
      const res = await Axios.get(`${host}/api/v1/postTypes`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTypePost(res.data);
    } catch (err) {
      setError(err);
    }
  };

  const getResults = () => {
    if (selectJobCat && selectTypePost) {
      const arrayFiltered = annonceData.filter(
        (annonce) =>
          annonce.JobCategory.labelFr === selectJobCat &&
          annonce.TypePost.labelFr === selectTypePost
      );
      setAnnonceFiltered(arrayFiltered);
    } else if (selectJobCat && !selectTypePost) {
      const arrayFiltered = annonceData.filter(
        (annonce) => annonce.JobCategory.labelFr === selectJobCat
      );
      setAnnonceFiltered(arrayFiltered);
    } else if (!selectJobCat && selectTypePost) {
      const arrayFiltered = annonceData.filter(
        (annonce) => annonce.TypePost.labelFr === selectTypePost
      );
      setAnnonceFiltered(arrayFiltered);
    }
  };

  const resetSearch = () => {
    setAnnonceFiltered(annonceData);
  };

  const get = () => {
    getAnnounces();
    getJobCatData();
    getTypePost();
  };

  useEffect(() => {
    setisLoading(false);
    get();
  }, []);

  return (
    <Container>
      <h2 className="mb-5 mt-2">{t('rechercheAnnonce')}</h2>
      <Row className="mt-5">
        <Col sm="4" xs="12" className="mt-2">
          <Input
            type="select"
            name="select"
            id="exampleSelect"
            defaultValue="defaultValue"
            onChange={(e) => setSelectJobCat(e.target.value)}
          >
            <option value="defaultValue" disabled>
              {t('selectCategorie')}
            </option>
            {jobCatData.map((jobCat) => (
              <option>
                {translate === 'France'
                  ? jobCat.labelFr
                  : translate === 'Spain'
                  ? jobCat.labelEs
                  : jobCat.labelEus}
              </option>
            ))}
          </Input>
        </Col>
        <Col sm="4" xs="12" className="mt-2">
          <Input
            type="select"
            name="select"
            id="exampleSelect"
            defaultValue="defaultValue"
            onChange={(e) => setSelectTypePost(e.target.value)}
          >
            <option value="defaultValue" disabled>
              {t('selectAnnonceType')}
            </option>
            {TypePost.map((typepost) => (
              <option>
                {translate === 'France'
                  ? typepost.labelFr
                  : translate === 'Spain'
                  ? typepost.labelEs
                  : typepost.labelEus}
              </option>
            ))}
          </Input>
        </Col>
        <Col sm="2" xs="12" className="mt-2">
          <Button onClick={getResults} className="button">
            {t('rechercher')}
          </Button>
        </Col>
        <Col sm="2" xs="12" className="mt-2">
          <Button onClick={resetSearch} className={styles.button}>
            {t('reinitialise')}
          </Button>
        </Col>
      </Row>
      <Row>
        {isLoading ? (
          <p>{t('chargement')}</p>
        ) : (
          <>
            {error ? <p>{t('erreurVu')}</p> : ''}
            {annonceFiltered.map((announce) => (
              <Col xs="6" className="mt-5">
                <Card className={styles.cardSize}>
                  <CardBody className={styles.cardSize}>
                    <CardTitle className={styles.cardTitle}>
                      {announce.title}
                    </CardTitle>
                    <CardSubtitle className={styles.cardSubtitle}>
                      {announce.JobCategory.labelFr} - {announce.localisation}
                    </CardSubtitle>
                    <CardSubtitle className={styles.cardSubtitleDate}>
                      {announce.createdAt}
                    </CardSubtitle>
                    <CardText className={styles.cardText}>
                      {ReactHtmlParser(announce.content)}
                    </CardText>
                    <Link to={`/announces/${announce.id}`}>
                      <Button className="button">{t('savoirPlus')}...</Button>
                    </Link>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </>
        )}
      </Row>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  token: state.authenticated.token,
  translate: state.translate.language,
});

ListAnnounceUser.propTypes = {
  token: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
  translate: PropTypes.string.isRequired,
};

export default compose(
  connect(mapStateToProps),
  withNamespaces()
)(ListAnnounceUser);
