import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Table, Col, Input } from 'reactstrap';

import styles from './Users_List_Table.module.css';

function UsersListTable({ usersList }) {
  const [isAsc, setIsAsc] = useState(false);
  const [lastName, setLastName] = useState([]);
  const [firstName, setFirstName] = useState([]);
  const [email, setEmail] = useState([]);
  const [country, setCountry] = useState([]);
  const [userType, setUserType] = useState([]);

  const getAscLastName = () => {
    const ascLastName = usersList.sort((a, b) => {
      const firstLastName = a.lastName.toLowerCase();
      const secondLastName = b.lastName.toLowerCase();
      if (firstLastName < secondLastName) {
        return -1;
      }
      if (firstLastName > secondLastName) {
        return 1;
      }
      return 0;
    });
    setLastName(ascLastName);
    setIsAsc(true);
    return lastName && isAsc;
  };

  const getDscLastName = () => {
    const dscLastName = usersList.sort((a, b) => {
      const firstLastName = a.lastName.toLowerCase();
      const secondLastName = b.lastName.toLowerCase();
      if (firstLastName > secondLastName) {
        return -1;
      }
      if (firstLastName < secondLastName) {
        return 1;
      }
      return 0;
    });
    setLastName(dscLastName);
    setIsAsc(false);
    return lastName && isAsc;
  };

  const getAscFirstName = () => {
    const ascFirstName = usersList.sort((a, b) => {
      const firstFirstName = a.firstName.toLowerCase();
      const secondFirstName = b.firstName.toLowerCase();
      if (firstFirstName < secondFirstName) {
        return -1;
      }
      if (firstFirstName > secondFirstName) {
        return 1;
      }
      return 0;
    });
    setFirstName(ascFirstName);
    setIsAsc(true);
    return firstName && isAsc;
  };
  const getDscFirstName = () => {
    const dscFirstName = usersList.sort((a, b) => {
      const firstFirstName = a.firstName.toLowerCase();
      const secondFirstName = b.firstName.toLowerCase();
      if (firstFirstName > secondFirstName) {
        return -1;
      }
      if (firstFirstName < secondFirstName) {
        return 1;
      }
      return 0;
    });
    setFirstName(dscFirstName);
    setIsAsc(false);
    return firstName && isAsc;
  };

  const getAscEmail = () => {
    const ascEmail = usersList.sort((a, b) => {
      const firstEmail = a.email.toLowerCase();
      const secondEmail = b.email.toLowerCase();
      if (firstEmail < secondEmail) {
        return -1;
      }
      if (firstEmail > secondEmail) {
        return 1;
      }
      return 0;
    });
    setEmail(ascEmail);
    setIsAsc(true);
    return email && isAsc;
  };
  const getDscEmail = () => {
    const dscEmail = usersList.sort((a, b) => {
      const firstEmail = a.email.toLowerCase();
      const secondEmail = b.email.toLowerCase();
      if (firstEmail > secondEmail) {
        return -1;
      }
      if (firstEmail < secondEmail) {
        return 1;
      }
      return 0;
    });
    setEmail(dscEmail);
    setIsAsc(false);
    return email && isAsc;
  };

  const getAscCountry = () => {
    const ascCountry = usersList.sort((a, b) => {
      const firstCountry = a.country.toLowerCase();
      const secondCountry = b.country.toLowerCase();
      if (firstCountry < secondCountry) {
        return -1;
      }
      if (firstCountry > secondCountry) {
        return 1;
      }
      return 0;
    });
    setCountry(ascCountry);
    setIsAsc(true);
    return country && isAsc;
  };
  const getDscCountry = () => {
    const dscCountry = usersList.sort((a, b) => {
      const firstCountry = a.country.toLowerCase();
      const secondCountry = b.country.toLowerCase();
      if (firstCountry > secondCountry) {
        return -1;
      }
      if (firstCountry < secondCountry) {
        return 1;
      }
      return 0;
    });
    setCountry(dscCountry);
    setIsAsc(false);
    return country && isAsc;
  };

  const getDscUserType = () => {
    const dscUserType = usersList.sort((a, b) => {
      const firstUserType = a.UserTypeId.toLowerCase();
      const secondUserType = b.UserTypeId.toLowerCase();
      if (firstUserType > secondUserType) {
        return -1;
      }
      if (firstUserType < secondUserType) {
        return 1;
      }
      return 0;
    });
    setUserType(dscUserType);
    setIsAsc(true);
    return userType && isAsc;
  };
  const getAscUserType = () => {
    const ascUserType = usersList.sort((a, b) => {
      const firstUserType = a.UserTypeId.toLowerCase();
      const secondUserType = b.UserTypeId.toLowerCase();
      if (firstUserType < secondUserType) {
        return -1;
      }
      if (firstUserType > secondUserType) {
        return 1;
      }
      return 0;
    });
    setUserType(ascUserType);
    setIsAsc(false);
    return userType && isAsc;
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
              Nom
              <button
                type="button"
                className={styles.arrowButtons}
                onClick={getAscLastName}
              >
                <span className={styles.arrowDown} />
              </button>
              <button
                type="button"
                className={styles.arrowButtons}
                onClick={getDscLastName}
              >
                <span className={styles.arrowUp} />
              </button>
            </th>
            <th>
              Prénom
              <button
                type="button"
                className={styles.arrowButtons}
                onClick={getAscFirstName}
              >
                <span className={styles.arrowDown} />
              </button>
              <button
                type="button"
                className={styles.arrowButtons}
                onClick={getDscFirstName}
              >
                <span className={styles.arrowUp} />
              </button>
            </th>
            <th>
              Email
              <button
                type="button"
                className={styles.arrowButtons}
                onClick={getAscEmail}
              >
                <span className={styles.arrowDown} />
              </button>
              <button
                type="button"
                className={styles.arrowButtons}
                onClick={getDscEmail}
              >
                <span className={styles.arrowUp} />
              </button>
            </th>
            <th>
              Pays
              <button
                type="button"
                className={styles.arrowButtons}
                onClick={getAscCountry}
              >
                <span className={styles.arrowDown} />
              </button>
              <button
                type="button"
                className={styles.arrowButtons}
                onClick={getDscCountry}
              >
                <span className={styles.arrowUp} />
              </button>
            </th>
            <th>
              Type d&apos;utilisateur
              <button
                type="button"
                className={styles.arrowButtons}
                onClick={getAscUserType}
              >
                <span className={styles.arrowDown} />
              </button>
              <button
                type="button"
                className={styles.arrowButtons}
                nClick={getDscUserType}
              >
                <span className={styles.arrowUp} />
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {usersList.map((user) => {
            return (
              <tr>
                <th>
                  <Input type="checkbox" className={styles.checkboxTh} />
                </th>
                <td>{user.lastName}</td>
                <td>{user.firstName}</td>
                <td>{user.email}</td>
                <td>{user.country}</td>
                <td>{user.UserTypeId}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Col>
  );
}

UsersListTable.propTypes = {
  usersList: PropTypes.string.isRequired,
};

export default UsersListTable;
