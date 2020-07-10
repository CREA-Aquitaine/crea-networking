import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Table, Col, Input } from 'reactstrap';

import styles from './Announces.module.css';

function AnnouncesListTable({ announcesList }) {
  const [isAsc, setIsAsc] = useState(false);
  const [numberAnnounce, setNumberAnnounce] = useState([]);
  const [title, setTitle] = useState([]);
  const [typeAnnounces, setTypeAnnounces] = useState([]);
  const [category, setCategory] = useState([]);

  const getAscnumberAnnounce = () => {
    const ascNumberAnnounce = announcesList.sort((a, b) => {
      const firstNumberAnnounce = a.id.toLowerCase();
      const secondNumberAnnounce = b.id.toLowerCase();
      if (firstNumberAnnounce < secondNumberAnnounce) {
        return -1;
      }
      if (firstNumberAnnounce > secondNumberAnnounce) {
        return 1;
      }
      return 0;
    });
    setNumberAnnounce(ascNumberAnnounce);
    setIsAsc(true);
    return numberAnnounce && isAsc;
  };

  const getDscnumberAnnounce = () => {
    const dscNumberAnnounce = announcesList.sort((a, b) => {
      const firstNumberAnnounce = a.id.toLowerCase();
      const secondNumberAnnounce = b.id.toLowerCase();
      if (firstNumberAnnounce > secondNumberAnnounce) {
        return -1;
      }
      if (firstNumberAnnounce < secondNumberAnnounce) {
        return 1;
      }
      return 0;
    });
    setNumberAnnounce(dscNumberAnnounce);
    setIsAsc(false);
    return numberAnnounce && isAsc;
  };

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

  const getAscTypeAnnounce = () => {
    const ascTypeAnnounceFilter = announcesList.filter((post) => {
      if (
        post.TypePost !== null &&
        post.TypePost.labelFr !== null &&
        post.TypePostId !== null
      ) {
        return post.TypePost.labelFr;
      }
      return '';
    });
    const ascTypeAnnounce = ascTypeAnnounceFilter.sort((a, b) => {
      const firstTypeAnnounce = a.TypePost.labelFr.toLowerCase();
      const secondTypeAnnounce = b.TypePost.labelFr.toLowerCase();
      if (firstTypeAnnounce < secondTypeAnnounce) {
        return -1;
      }
      if (firstTypeAnnounce > secondTypeAnnounce) {
        return 1;
      }
      return 0;
    });
    setTypeAnnounces(ascTypeAnnounce);
    setIsAsc(true);
    return typeAnnounces && isAsc;
  };
  const getDscTypeAnnounce = () => {
    const dscTypeAnnounceFilter = announcesList.filter((post) => {
      if (
        post.TypePost !== null &&
        post.TypePost.labelFr !== null &&
        post.TypePostId !== null
      ) {
        return post.TypePost.labelFr;
      }
      return '';
    });
    const dscTypeAnnounce = dscTypeAnnounceFilter.sort((a, b) => {
      const firstTypeAnnounce = a.TypePost.labelFr.toLowerCase();
      const secondTypeAnnounce = b.TypePost.labelFr.toLowerCase();
      if (firstTypeAnnounce > secondTypeAnnounce) {
        return -1;
      }
      if (firstTypeAnnounce < secondTypeAnnounce) {
        return 1;
      }
      return 0;
    });
    setTypeAnnounces(dscTypeAnnounce);
    setIsAsc(false);
    return typeAnnounces && isAsc;
  };

  const getAscCategory = () => {
    const ascCategoryFilter = announcesList.filter((post) => {
      if (
        post.JobCategory !== null &&
        post.JobCategory.labelFr !== null &&
        post.JobCategoryId !== null
      ) {
        return post.JobCategory.labelFr;
      }
      return '';
    });
    const ascCategory = ascCategoryFilter.sort((a, b) => {
      const firstCategory = a.JobCategory.labelFr.toLowerCase();
      const secondCategory = b.JobCategory.labelFr.toLowerCase();
      if (firstCategory < secondCategory) {
        return -1;
      }
      if (firstCategory > secondCategory) {
        return 1;
      }
      return 0;
    });
    setCategory(ascCategory);
    setIsAsc(true);
    return category && isAsc;
  };
  const getDscCategory = () => {
    const dscCategoryFilter = announcesList.filter((post) => {
      if (
        post.JobCategory !== null &&
        post.JobCategory.labelFr !== null &&
        post.JobCategoryId !== null
      ) {
        return post.JobCategory.labelFr;
      }
      return '';
    });
    const dscCategory = dscCategoryFilter.sort((a, b) => {
      const firstCategory = a.JobCategory.labelFr.toLowerCase();
      const secondCategory = b.JobCategory.labelFr.toLowerCase();
      if (firstCategory > secondCategory) {
        return -1;
      }
      if (firstCategory < secondCategory) {
        return 1;
      }
      return 0;
    });
    setCategory(dscCategory);
    setIsAsc(false);
    return category && isAsc;
  };

  return (
    <Col>
      <Table borderless>
        <thead>
          <tr>
            <th className={styles.thCheckbox}>
              <Input type="checkbox" className={styles.checkboxTh} />
            </th>
            <th>
              N° Annonce
              <button
                type="button"
                className={styles.arrowButtons}
                onClick={getAscnumberAnnounce}
              >
                <span className={styles.arrowDown} />
              </button>
              <button
                type="button"
                className={styles.arrowButtons}
                onClick={getDscnumberAnnounce}
              >
                <span className={styles.arrowUp} />
              </button>
            </th>
            <th>
              Titre
              <button
                type="button"
                className={styles.arrowButtons}
                onClick={getAscTitle}
              >
                <span className={styles.arrowDown} />
              </button>
              <button
                type="button"
                className={styles.arrowButtons}
                onClick={getDscTitle}
              >
                <span className={styles.arrowUp} />
              </button>
            </th>
            <th>
              Type d&apos;annonces
              <button
                type="button"
                className={styles.arrowButtons}
                onClick={getAscTypeAnnounce}
              >
                <span className={styles.arrowDown} />
              </button>
              <button
                type="button"
                className={styles.arrowButtons}
                onClick={getDscTypeAnnounce}
              >
                <span className={styles.arrowUp} />
              </button>
            </th>
            <th>
              Catégorie
              <button
                type="button"
                className={styles.arrowButtons}
                onClick={getAscCategory}
              >
                <span className={styles.arrowDown} />
              </button>
              <button
                type="button"
                className={styles.arrowButtons}
                onClick={getDscCategory}
              >
                <span className={styles.arrowUp} />
              </button>
            </th>
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
                <td>{post.TypePost ? post.TypePost.labelFr : ''}</td>
                <td>{post.JobCategory ? post.JobCategory.labelFr : ''}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Col>
  );
}

AnnouncesListTable.propTypes = {
  announcesList: PropTypes.string.isRequired,
};

export default AnnouncesListTable;
