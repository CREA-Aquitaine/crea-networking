import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Table, Col, Input } from 'reactstrap';

import styles from './Announces.module.css';

const labelTable = [
  { label: 'N° Annonce' },
  { label: 'Titre' },
  { label: "Type d'annonce" },
  { label: 'Catégorie' },
];

function AnnouncesListTable({ token }) {
  const [announcesList, setAnnounceslist] = useState([]);
  const [error, setError] = useState('');

  const getAnnounces = async () => {
    try {
      const res = await Axios.get('http://localhost:8080/api/v1/posts', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAnnounceslist(res.data);
    } catch (err) {
      setError(error);
    }
  };

  useEffect(() => {
    getAnnounces();
  }, []);
  return (
    <Col>
      <Table borderless>
        <thead>
          <tr>
            <th className={styles.thCheckbox}>
              <Input type="checkbox" className={styles.checkboxTh} />
            </th>
            {labelTable.map((label) => {
              return (
                <th>
                  {label.label}
                  <button
                    type="button"
                    className={styles.arrowButtons}
                    onClick={getAnnounces}
                  >
                    <span className={styles.arrowDown} />
                  </button>
                  <button
                    type="button"
                    className={styles.arrowButtons}
                    onClick={getAnnounces}
                  >
                    <span className={styles.arrowUp} />
                  </button>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {announcesList.map((post) => {
            return (
              <tr>
                <th>
                  <Input type="checkbox" className={styles.checkboxTh} />
                </th>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.TypePostId}</td>
                <td>{post.JobCategoryId}</td>
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
  token: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(AnnouncesListTable);
