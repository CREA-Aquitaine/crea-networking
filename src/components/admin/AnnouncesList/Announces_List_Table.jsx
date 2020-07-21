import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { connect } from 'react-redux';
import { Table, Col } from 'reactstrap';

import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import { IoMdClose } from 'react-icons/io';
import styles from './Announces.module.css';

const host = process.env.REACT_APP_HOST;

function AnnouncesListTable({ announcesList, token, getAnnounces }) {
  const [isAsc, setIsAsc] = useState(false);
  const [title, setTitle] = useState([]);
  const [error, setError] = useState('');

  const getAscTitle = () => {
    const ascTitle = announcesList.sort((a, b) => {
      const firstTitle = a.title.toLowerCase();
      const secondTitle = b.title.toLowerCase();
      if (firstTitle < secondTitle) {
        return -1;
      }
      if (firstTitle > secondTitle) {
        return 1;
      }
      return 0;
    });
    setTitle(ascTitle);
    setIsAsc(true);
    return title && isAsc;
  };
  const getDscTitle = () => {
    const dscTitle = announcesList.sort((a, b) => {
      const firstTitle = a.title.toLowerCase();
      const secondTitle = b.title.toLowerCase();
      if (firstTitle > secondTitle) {
        return -1;
      }
      if (firstTitle < secondTitle) {
        return 1;
      }
      return 0;
    });
    setTitle(dscTitle);
    setIsAsc(false);
    return title && isAsc;
  };

  const deleteAnnounce = async () => {
    try {
      const postId = announcesList.find((post) => post.id);
      await Axios.delete(`${host}/api/v1/posts/${postId.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return getAnnounces();
    } catch (err) {
      setError(err);
      return error;
    }
  };

  return (
    <Col>
      <Table borderless>
        <thead className={styles.theadBackground}>
          <tr>
            <th>
              Titre
              <RiArrowDropDownLine onClick={getAscTitle} size="25" />
              <RiArrowDropUpLine onClick={getDscTitle} size="25" />
            </th>
            <th>Type d&apos;annonces</th>
            <th>Catégorie</th>
            <th>Supprimer </th>
          </tr>
        </thead>
        <tbody>
          {announcesList.map((post) => {
            return (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>{post.TypePost ? post.TypePost.labelFr : ''}</td>
                <td>{post.JobCategory ? post.JobCategory.labelFr : ''}</td>
                <td className={styles.crossImg}>
                  <IoMdClose
                    onClick={deleteAnnounce}
                    fill="#dd2b25"
                    className={styles.cross}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Col>
  );
}

const mapStateToProps = (state) => ({
  token: state.authenticated.token,
});
AnnouncesListTable.propTypes = {
  announcesList: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  getAnnounces: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(AnnouncesListTable);
