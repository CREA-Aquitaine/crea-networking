import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row } from 'reactstrap';
import styles from './Announces.module.css';
import AnnouncesListTable from './Announces_List_Table';

const host = process.env.REACT_APP_HOST;

function AnnouncesList({ token }) {
  const [announcesList, setAnnounceslist] = useState([]);
  const [error, setError] = useState('');
  const [isPostType, setIsPostType] = useState(false);
  const [postTypes, setPostTypes] = useState([]);

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
  const getAnnouncesByType = async (type) => {
    try {
      const res = await Axios.get(`${host}/api/v1/posts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const announcesByType = res.data.filter((post) => {
        if (post.TypePost) {
          return post.TypePost.labelFr === type;
        }
        return '';
      });
      setAnnounceslist(announcesByType);
      setIsPostType(true);
    } catch (err) {
      setError(error);
    }
    return isPostType;
  };

  const getTypePost = async () => {
    try {
      const res = await Axios.get(`${host}/api/v1/postTypes`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPostTypes(res.data);
      return res.data;
    } catch (err) {
      return err;
    }
  };

  useEffect(() => {
    getAnnounces();
    getTypePost();
  }, []);
  return (
    <>
      <Container>
        <h2 className="mt-1 mb-3">Gestion des annonces</h2>
        <Container fluid className={styles.containerCadre}>
          <Row
            className={`${styles.announcesListPage} justify-content-center mb-3`}
          >
            <button
              type="button"
              className={styles.buttonInput}
              onClick={getAnnounces}
            >
              Toutes les Annonces
            </button>
            {postTypes.map((type) => (
              <button
                type="button"
                className={styles.buttonInput}
                onClick={() => getAnnouncesByType(type.labelFr)}
              >
                {type.labelFr}
              </button>
            ))}
          </Row>
          <Row>
            <AnnouncesListTable
              announcesList={announcesList}
              getAnnounces={getAnnounces}
            />
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
