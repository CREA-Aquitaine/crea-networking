/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import axios from 'axios';
import { Row } from 'reactstrap';
import Partner from './Partner';

// import styles from './Partners.module.css';

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
    const url = 'http://localhost:8080/api/v1/partners';
    axios
      .get(url)
      .then((res) => {
        const { data } = res;
        this.setState({ partners: data });
        // console.log(data);
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
      <Row>
        {partners.map((xa) => (
          <Partner {...xa} />
        ))}
      </Row>
    );
  }
}

export default Partners;
