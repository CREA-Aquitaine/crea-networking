import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import {
  Button,
  CardText,
  CardSubtitle,
  CardTitle,
  CardBody,
  Card,
  CardColumns,
  Container,
  Input,
  Row,
  Col,
} from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function ListAnnounceUser({ token }) {
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

  // const selectJobCat = (e) => {
  //   const jobCat = e.target.value;
  //   const arrayFiltered = annonceData.filter(
  //     (annonce) => annonce.JobCategory.labelFr === jobCat
  //   );
  //   setAnnonceFiltered(arrayFiltered);
  // };

  // const selectTypePost = (e) => {
  //   const typePost = e.target.value;
  //   if (annonceData !== annonceFiltered) {
  //     const arrayFiltered = annonceFiltered.filter(
  //       (annonce) => annonce.TypePost.labelFr === typePost
  //     );
  //     setAnnonceFiltered(arrayFiltered);
  //   } else {
  //     const arrayFiltered = annonceData.filter(
  //       (annonce) => annonce.TypePost.labelFr === typePost
  //     );
  //     setAnnonceFiltered(arrayFiltered);
  //   }
  // };

  useEffect(() => {
    getAnnounces();
    getJobCatData();
    getTypePost();
    setisLoading(false);
  }, []);

  return (
    <Container className="my-5">
      <Row>
        <Col>
          <Input
            type="select"
            name="select"
            id="exampleSelect"
            defaultValue="defaultValue"
            onChange={(e) => setSelectJobCat(e.target.value)}
          >
            <option value="defaultValue" disabled>
              Selectionnez la catégorie
            </option>
            {jobCatData.map((jobCat) => (
              <option>{jobCat.labelFr}</option>
            ))}
          </Input>
        </Col>
        <Col>
          <Input
            type="select"
            name="select"
            id="exampleSelect"
            defaultValue="defaultValue"
            onChange={(e) => setSelectTypePost(e.target.value)}
          >
            <option value="defaultValue" disabled>
              Selectionnez le type d&apos;annonce
            </option>
            {TypePost.map((typepost) => (
              <option>{typepost.labelFr}</option>
            ))}
          </Input>
        </Col>

        <Col>
          <Button onClick={getResults} className="button">
            Search
          </Button>
          <Button onClick={resetSearch} className="button">
            Reset
          </Button>
        </Col>
      </Row>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <CardColumns>
          {error ? <p>There is an error</p> : ''}
          {annonceFiltered.map((announce) => (
            <Card>
              <CardBody>
                <CardTitle>{announce.title}</CardTitle>
                <CardSubtitle>{announce.localisation}</CardSubtitle>
                <CardSubtitle>{announce.JobCategory.labelFr}</CardSubtitle>
                <CardSubtitle>{announce.TypePost.labelFr}</CardSubtitle>
                <CardText>{announce.content}</CardText>
                <Link to={`/announces/${announce.id}`}>
                  <Button className="button">Button</Button>
                </Link>
              </CardBody>
            </Card>
          ))}
        </CardColumns>
      )}
    </Container>
  );
}

const mapStateToProps = (state) => ({
  token: state.authenticated.token,
});

ListAnnounceUser.propTypes = {
  token: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(ListAnnounceUser);