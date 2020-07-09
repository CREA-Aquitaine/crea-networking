import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Button,
  Breadcrumb,
  BreadcrumbItem,
  Input,
  Container,
  Row,
  Col,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import styles from './Announces.module.css';
import AnnouncesListTable from './Announces_List_Table';

const host = process.env.REACT_APP_HOST;

function AnnouncesList({ token }) {
  const [announcesList, setAnnounceslist] = useState([]);
  const [error, setError] = useState('');
  const [isPostType, setIsPostType] = useState(false);

  const getAnnounces = async () => {
    try {
      const res = await Axios.get(`${host}/api/v1/posts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAnnounceslist(res.data);
      setIsPostType(true);
    } catch (err) {
      setError(error);
    }
  };

  const getPartnerShip = async () => {
    try {
      const res = await Axios.get(`${host}/api/v1/posts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const partnerShip = res.data.filter((post) => {
        if (post.TypePost) {
          return post.TypePost.labelFr === 'Partenariat';
        }
        return '';
      });
      setAnnounceslist(partnerShip);
      setIsPostType(true);
    } catch (err) {
      setError(error);
    }
    return isPostType;
  };

  const getJobs = async () => {
    try {
      const res = await Axios.get(`${host}/api/v1/posts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const jobs = res.data.filter((post) => {
        if (post.TypePost) {
          return post.TypePost.labelFr === "Recherche d'emploi";
        }
        return '';
      });
      setAnnounceslist(jobs);
      setIsPostType(true);
    } catch (err) {
      setError(error);
    }
    return isPostType;
  };

  const getDev = async () => {
    try {
      const res = await Axios.get(`${host}/api/v1/posts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const devs = res.data.filter((post) => {
        if (post.TypePost) {
          return post.TypePost.labelFr === 'Recherche & Développement';
        }
        return '';
      });
      setAnnounceslist(devs);
      setIsPostType(true);
    } catch (err) {
      setError(error);
    }
    return isPostType;
  };

  useEffect(() => {
    getAnnounces();
  }, []);
  return (
    <>
      <Container>
        <Breadcrumb>
          <BreadcrumbItem tag={Link} to="/">
            Accueil
          </BreadcrumbItem>
          <BreadcrumbItem active tag={Link} to="/announces">
            Mes Annonces
          </BreadcrumbItem>
        </Breadcrumb>
        <Container fluid className={styles.containerCadre}>
          <Row className={styles.announcesListTitle}>
            <Col xs="3" className={styles.announcesListTitleMargin}>
              Gestion des annonces
            </Col>
            <Col xs={{ size: '3', offset: '6' }}>
              <Input
                className={styles.inputSearch}
                type="search"
                name="search"
                id="exampleSearch"
                placeholder="RECHERCHER"
              />
            </Col>
          </Row>
          <Row className={styles.announcesListPage}>
            <button
              type="button"
              className={styles.buttonIput}
              onClick={getAnnounces}
            >
              Toutes les Annonces
            </button>
            <button
              type="button"
              className={styles.buttonIput}
              onClick={getPartnerShip}
            >
              Partenariats
            </button>
            <button
              type="button"
              className={styles.buttonIput}
              onClick={getJobs}
            >
              Recherche d&apos;emploi
            </button>
            <button
              type="button"
              className={styles.buttonIput}
              onClick={getDev}
            >
              Recherche & développement
            </button>
          </Row>
          <Row>
            <AnnouncesListTable announcesList={announcesList} />
          </Row>
          <Row>
            <Col xs="3" className={styles.link}>
              <Link to="/" className={styles.announcesListExportButton}>
                Exporter la liste{' '}
              </Link>
            </Col>
            <Col className={styles.link} xs={{ size: '3', offset: '6' }}>
              <Button className="button">Supprimer</Button>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

const mapStateToProps = (state) => ({
  token: state.authenticated.token,
});

AnnouncesList.propTypes = {
  token: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(AnnouncesList);
