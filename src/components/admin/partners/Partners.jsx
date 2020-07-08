import React, { useEffect, useState } from 'react';
import { Breadcrumb, BreadcrumbItem, Container, Row, Col } from 'reactstrap';
import Axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './Partner.module.css';
import PartnersList from './PartnersList';
import PartnersPost from './PartnersPost';

function Partners({ token }) {
  const [partners, setPartners] = useState([]);
  const [error, setError] = useState('');

  const getPartners = async () => {
    try {
      const res = await Axios.get('http://localhost:8080/api/v1/partners', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPartners(res.data);
    } catch (err) {
      setError(err);
    }
  };
  useEffect(() => {
    getPartners();
  }, []);

  return (
    <Container>
      <Breadcrumb>
        <BreadcrumbItem>Accueil</BreadcrumbItem>
        <BreadcrumbItem active>Partenaires</BreadcrumbItem>
      </Breadcrumb>
      <Container fluid className={styles.containerQR}>
        <Row className={styles.searchBar}>
          <Col xs="3" className={styles.faqTitle}>
            Gérer les partenaires
          </Col>
        </Row>
        {error ? <p>Problème lors de la récupération des partenaires</p> : ''}
        <PartnersPost getPartners={getPartners} />
        <PartnersList partners={partners} getPartners={getPartners} />
      </Container>
    </Container>
  );
}
const mapStateToProps = (state) => ({
  token: state.authenticated.token,
});

Partners.propTypes = {
  token: PropTypes.string.isRequired,
};
export default connect(mapStateToProps)(Partners);
