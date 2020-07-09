/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import axios from 'axios';
import { Row, Container, Col } from 'reactstrap';
import Partner from './Partner';

import styles from './Partners.module.css';

const host = process.env.REACT_APP_HOST;

class Partners extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      partners: [],
      loading: true,
    };
    this.getPartner = this.getPartner.bind(this);
  }

  componentDidMount() {
    this.getPartner();
  }

  getPartner() {
    const url = `${host}/api/v1/partners`;
    axios
      .get(url)
      .then((res) => {
        const { data } = res;
        this.setState({ partners: data });
      })
      // .catch((err) => {
      //   console.log(err.message);
      // })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  render() {
    const { loading, partners } = this.state;

    if (loading) {
      return <div>loading ...</div>;
    }
    return (
      <Container>
        <h2>Nos partenaires</h2>
        <Row className={styles.rowPartners}>
          {partners.map((xa) => (
            <Col xs="4" className={styles.colLogo}>
              <Partner {...xa} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Partners;
