import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import Slider from 'react-slick';
import styles from './Steps.module.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const host = process.env.REACT_APP_HOST;

function BestFriends({ t }) {
  // eslint-disable jsx-props-no-spreading
  const [partners, setPartners] = useState([]);

  const getPartners = async () => {
    try {
      const res = await Axios.get(`${host}/api/v1/partners`);
      const partnersFavorite = res.data.filter((item) => item.favorite === '1');
      return setPartners(partnersFavorite);
    } catch (err) {
      return err;
    }
  };

  useEffect(() => {
    getPartners();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container fluid className={`${styles.partner} my-5`}>
      <Row>
        <h3 className="mx-auto mt-5 mb-3">{t('confiance')}</h3>
      </Row>
      <Row className="mt-5">
        <Slider {...settings} className={styles.partenairesCarousel}>
          {partners.map((item) => (
            <Col key={item.id}>
              <img
                className={styles.partenaire}
                alt={item.label}
                src={item.logo}
              />
            </Col>
          ))}
        </Slider>
      </Row>
    </Container>
  );
}

BestFriends.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withNamespaces()(BestFriends);
